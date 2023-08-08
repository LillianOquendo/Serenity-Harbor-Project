import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
//import './styles.css';
import {Icon} from 'leaflet'

function Contact() {
    const phoneNumber = '123-456-7891';
    const address = '11 Broadway, New York, NY 10004';
    const email = 'SerenityHarbor@randomsite.com'

    const mainIcon = new Icon({
        iconUrl: ('https://img.icons8.com/plasticine/100/exterior.png'), 
        iconSize: [38, 40], // size of the icon
        iconAnchor: [22, 22], // point of the icon which will correspond to marker's location
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

                <Marker position={[40.71320544444, -74.01320544444]} icon= {mainIcon} >
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