import React, {useState, useEffect} from "react";

function Consultation({newConsultation}){
console.log(newConsultation)
    return(
        <div>
            <h1>1{newConsultation.name}</h1>
            <h1>2{newConsultation.email}</h1>
            <h1>3{newConsultation.message}</h1>

        </div>
    )
}
export default Consultation;