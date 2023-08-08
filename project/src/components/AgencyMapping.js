import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'

  const legalIcon = new Icon ({
    iconUrl : 'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-court-police-flaticons-lineal-color-flat-icons.png',
    iconSize : [48,48], // size of the icon
    iconAnchor : [22.94], // point of the icon which will correspond to marker's location
    popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor

  })
  const foodIcon = new Icon ({
    iconUrl : 'https://img.icons8.com/doodle/48/apple.png',
    iconSize : [48, 48], // size of the icon
    iconAnchor : [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
  })
  const healthIcon = new Icon ({
    iconUrl: 'https://img.icons8.com/office/16/heart-with-pulse.png',
    iconSize : [48,48], // size of the icon
    iconAnchor : [22,94], // point of the icon which will correspond to marker's location
    popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
  })

  const housingIcon = new Icon({
    iconUrl: "https://img.icons8.com/plasticine/100/exterior.png",
    iconSize: [38, 45], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})
function AgencyMaps() {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    fetch('/agencies')
      .then(response => response.json())
      .then(agencies => setAgencies(agencies))
  }, []);



  // Function to get the appropriate icon for a category
  const getCategoryIcon = category => {
    if (category === 'Housing') {
      return housingIcon;
    } else if (category === 'Legal') {
      return legalIcon;
    } else if (category === 'Food') {
      return foodIcon;
    } else if (category === 'Health') {
      return healthIcon;
    } else {
      // Default icon if category doesn't match any of the above
      return healthIcon; // Or another default icon
    }
  };
  // Pull this information from seed to display on leaflet map
  const agencyCoordinates = agencies.map(agency => {
    console.log('Latitude: ', agency.latitude);
    console.log('Longitude: ', agency.longitude);

  return{ latitude: agency.latitude,
    longitude: agency.longitude,
    name: agency.name,
    fulladdress: agency.fulladdress,
    category: agency.category,
    icon: getCategoryIcon(agency.category),
  }
  });

  return (
    <MapContainer center={[40.6462288, -73.95754575]} zoom={14} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
      {agencyCoordinates.map((agency, index) => (
        <Marker
          key={index}
          position={[agency.latitude, agency.longitude]}
          icon={agency.icon} // Use the selected icon
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