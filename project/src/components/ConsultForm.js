import React, { useEffect, useState } from "react";

function ConsultForm() {
    const [value, setValue] = useState("");
    const [consultations, setConsultations] =useState([])
    const [name, setName]= useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    useEffect(()=>{
        fetch ('/consultations')
        .then(response => response.json())
        .then(consultations => setConsultations(consultations))
    }, [])


    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        //event.preventDefault();

        //topic selection validation
        if (value === "") {
            alert("Please select a topic before submitting.");
            return;
        }
        
        const new_consultation = {
            name: name,
            email: email,
            message: message  
        }


        //const data = { topic: value };
        //404 error getting thrown for this fetch. Need to figure out why. Seed is rendering properly just not posting
        fetch('/consultations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept':'application/json'
            },
            body: JSON.stringify(new_consultation)
        })
        .then(response => response.json())
        .then(new_consultation => {
            setConsultations([...consultations, new_consultation])
        });

// Set formSubmitted to true to display a success message
        setFormSubmitted(true);
    };

    return (
        <div>
            {formSubmitted ? (
                <p>Thank you for submitting the form! We will get in touch with you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Request a Consultation:</h2>
                    <label>
                        Select A Topic You Need Help In:  </label>
                        <select value={value} onChange={handleChange}>
                            <option value="">-- Select a topic --</option>
                            <option value="legal">Legal</option>
                            <option value="food">Food</option>
                            <option value="health">Health</option>
                            <option value="housing">Housing</option>
                        </select>
                    <br></br>
                    <br></br>
                    <label>Name: </label>
                    <input type= "text" id = 'name'name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    <br></br>
                    <br></br>
                    <label>Email: </label>
                    <input type="text" id = 'email' email='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <br></br>
                    <label>Message: </label>
                    <input type="text" id = 'message' message ='message' value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
                    <br></br>
                    <button type="submit">Submit</button>
                    
                </form>
            )}
        </div>
    );
}

export default ConsultForm;
