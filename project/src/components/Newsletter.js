import React, { useState, useEffect } from 'react';
function NewsletterSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const [subscribers, setSubscribers] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false)

    useEffect(() => {
        fetch('/newsletter')
            .then((response) => response.json())
            .then((subscribers) => setSubscribers(subscribers));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        const new_subscriber = {
            name: formData.name,
            email: formData.email,
        };

        fetch('/newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(new_subscriber),
        })
            .then((response) => response.json())
            .then((new_subscriber) => {
                setSubscribers([...subscribers, new_subscriber]);
                setFormSubmitted(true);

                //clear fields after submission
                setFormData({
                    name: '',
                    email: '',
                });
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    return (
        <footer className="bg-white ">
            <div className="newsletter-bg ">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center justify-between md:flex-row">
                        <div id='5' className="mb-3 text-center md:mb-0 md:text-left">
                            <span className="font-bold uppercase tracking-widest text-black">
                                Sign-Up for Our Newsletter!
                            </span>
                            
                        </div>

                        <form id='6' className=" items-center flex w-full gap-2 md:max-w-md md:w-auto" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-72 flex-1 rounded border border-cyan-700 bg-white px-8 py-2 text-black placeholder-black  ring-customTeal transition duration-100 focus:ring"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-72 flex-1 rounded border border-cyan-700 bg-white px-8 py-2 text-black placeholder-black outline-none ring-customTeal transition duration-100 focus:ring"
                            />

                            {/* <button type="submit" className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-customTeal outline-cyan-700 ring-customTeal transition duration-100">
                                Send
                            </button> */}
                            <button class="mx-auto lg:mx-0 hover:underline bg-cyan-700 text-white font-bold rounded-full my-3 py-2 px-7 shadow-md focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="border-t py-2 text-center text-sm text-gray-400">
                © 2023 - Created by Lillian Oquendo
            </div>
        </footer>
    );
}

export default NewsletterSignup;

