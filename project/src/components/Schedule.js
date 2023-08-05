import React, { useState, useEffect } from 'react';

const AppointmentSchedule = () => {
    const [consultations, setConsultations] = useState([]);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        fetchConsultations();
    }, []);

    const fetchConsultations = async () => {
        try {
            const response = await fetch('/consultations');
            const data = await response.json();
            setConsultations(data);
        } catch (error) {
            console.error('Error fetching consultations:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/consultations', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const newConsultation = await response.json();
            setConsultations([...consultations, newConsultation]);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error creating consultation:', error);
        }
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleDelete = async (consultationId) => {
        try {
            await fetch(`/consultations/${consultationId}`, {
                method: 'DELETE',
            });
            setConsultations(consultations.filter((consultation) => consultation.id !== consultationId));
        } catch (error) {
            console.error('Error deleting consultation:', error);
        }
    };

    return (
        <div>
            <h1>Consultation Schedule</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>

            <h2>Consultations</h2>
            <ul>
                {consultations.map((consultation) => (
                    <li key={consultation.id}>
                        <p>Name: {consultation.name}</p>
                        <p>Email: {consultation.email}</p>
                        <p>Message: {consultation.message}</p>
                        <button onClick={() => handleDelete(consultation.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentSchedule;
