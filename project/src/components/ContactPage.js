import React from "react";
import ConsultForm from "./ConsultForm";

function Contact() {
    const phoneNumber = '123-456-7891';
    const address = '11 Broadway, New York, NY 10004';
    const email = 'SerenityHarbor@randomsite.com'


    return (
        <div>
            
            <h2 className="text-7xl text-center" >Contact Us</h2>
            <p>Phone: {phoneNumber}</p>
            <p>Address: {address}</p>
            <p>Email: {email}</p>
            <br></br>
            <br></br>
            
            
        </div>
    )
}
//

export default Contact