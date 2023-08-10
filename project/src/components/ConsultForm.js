import React, { useEffect, useState } from "react";

function ConsultForm() {
    const [consultations, setConsultations] = useState([]);
    const [value, setValue] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [editingConsultationId, setEditingConsultationId] = useState(false)
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        fetch('/consultations')
            .then(response => response.json())
            .then(consultations => setConsultations(consultations))
    }, [])

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleEdit = (consultationId) => {
        const consultationToEdit = consultations.find((consultation) => consultation.id === consultationId);
        if (consultationToEdit) {
            //set which form areas/fields will be edited
            setValue(consultationToEdit.topic);
            setName(consultationToEdit.name);
            setEmail(consultationToEdit.email);
            setMessage(consultationToEdit.message);
            //set the edit mode and id to be edited
            setEditMode(true);
            setEditingConsultationId(consultationId)
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        //make user select a topic
        if (value === "") {
            alert("Please select a topic before submitting.");
            return;
        }

        const new_consultation = {
            name: name,
            email: email,
            message: message
        };

        if (editMode) {
            fetch(`/consultations/${editingConsultationId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(new_consultation)
            })
                .then(response => response.json())
                .then(updatedConsultation => {
                    // Update the consultation in the consultations list
                    setConsultations(consultations.map((consultation) =>
                        consultation.id === editingConsultationId ? updatedConsultation : consultation
                    ));
                    setEditMode(false);
                    setEditingConsultationId(null);
                    setName("");
                    setEmail("");
                    setMessage("");
                })
        } else {

            fetch('/consultations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(new_consultation)
            })
                .then(response => response.json())
                .then(new_consultation => {
                    setConsultations([...consultations, new_consultation]);
                });
            //find the consultation to be edited


            // const handleEdit = (consultation) =>{
            //     setName(consultation.name);
            //     setEmail(consultation.email);
            //     setMessage(consultation.message);
            //     setEditMode(true);
            //     setEditingConsultationId(consultation.id);
            //forces system to display a successful form submission message
            setFormSubmitted(true);
        }
    };

    const handleDelete = (id) => {
        fetch(`/consultations/${id}`, {
            method: 'DELETE'
        })
            .then(() => {
                setConsultations(consultations.filter((consultation) => consultation.id !== id));
            })
            .catch((error) => {
                console.error('Error deleting consultation:', error);
            });
    };

    return (
        <div>
            {formSubmitted ? (
                <p>Thank you for submitting the form! We will get in touch with you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h2>Request a Consultation:</h2>
                    <label>
                        Select A Topic You Need Help In: </label>
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
                    <input type="text" id='name' name='name' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <br></br>
                    <br></br>
                    <label>Email: </label>
                    <input type="text" id='email' email='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <br></br>
                    <label>Message: </label>
                    <input type="text" id='message' message='message' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            )}

            <h2>Consultations</h2>
            <ul>
                {consultations.map((consultation) => (
                    // Check if the consultation object exists before rendering its properties
                    consultation && (
                        <li key={consultation.id}>
                            <p>Name: {consultation.name}</p>
                            <p>Email: {consultation.email}</p>
                            <p>Message: {consultation.message}</p>
                            <button onClick={() => handleDelete(consultation.id)}>Delete Consultation</button>
                            <button onClick={() => handleEdit(consultation.id)}>Edit Consultation</button>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
}

export default ConsultForm;