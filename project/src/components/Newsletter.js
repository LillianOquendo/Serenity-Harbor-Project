import React, { useState } from 'react';
//figure out how to send email confirmation of signup to user
//need to include PATCH and DELETE features
function NewsletterSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

//send form info to backend table(newsletter_signups)
        fetch('/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            });

        // Clear the form after submission
        setFormData({ name: '', email: '' });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Newsletter Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name: </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    
                </div>
                <br></br>

                <div>
                    <label>
                        Email: </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    
                </div>

                <button type="submit">Subscribe</button>
            </form>
        </div>
    );
}

export default NewsletterSignup;
