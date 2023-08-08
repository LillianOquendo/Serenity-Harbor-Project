import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';


function AgencyMaps() {

  const [agencies, setAgencies] = useState([])
  //get agencies from seed.py file
  useEffect(() => {
    fetch('/agencies')
      .then(response => response.json())
      .then(agencies => setAgencies(agencies))
  }, []);
  //pull this information from seed to display on leaflet map
  const agencyCoordinates = agencies.map(agencies => ({
    latitude: agencies.latitude,
    longitude: agencies.longitude,
    name: agencies.name,
    fulladdress: agencies.fulladdress,
    category: agencies.category
  }))
  //need to finish figuring out how to change logo icon since the one from leaflet doesn't work
  //need to decide how to neatly display the information on the page below so users can see the rest of the information for each agency ie hours, phone# etc
  return (
    <MapContainer center={[40.6462288, -73.95754575]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
      {agencyCoordinates.map((agency, index) => (
        <Marker
          key={index}
          position={[agency.latitude, agency.longitude]}
        >
          <Popup>
            <b>{agency.name}</b><br />
            <em>{agency.fulladdress}</em><br />
            Category: {agency.category}<br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default AgencyMaps;