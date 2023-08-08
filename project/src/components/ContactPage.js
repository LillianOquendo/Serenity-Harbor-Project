import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'

function Contact() {
    const phoneNumber = '123-456-7891';
    const address = '11 Broadway, New York, NY 10004';
    const email = 'SerenityHarbor@randomsite.com'

    const icon = L.icon({
        iconUrl: 'leaf-green.png',
        shadowUrl: 'leaf-shadow.png',

        iconSize: [38, 95], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    return (
        <div>

            <h2 className="text-7xl text-center" >Contact Us</h2>
            <p>Phone: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>Email: {email}</p>

            <br></br>
            <br></br>
            <MapContainer center={[40.71320544444, -74.01320544444]} zoom={13} style={{ height: '400px', width: '50%', padding: '-40px' }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />

                <Marker position={[40.71320544444, -74.01320544444]}>
                    <Popup>
                        <b>Hello!</b><br />This is our home office
                    </Popup>
                </Marker>
            </MapContainer>

        </div>
    )
}
//

export default Contact