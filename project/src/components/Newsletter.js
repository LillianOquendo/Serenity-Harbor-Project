import React, { useState } from 'react';

function NewsletterSignup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send form info to backend table (newsletter_signups)
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

    //Need to edit footer to stretch across the bottom of the page
    return (
        <footer className="text-gray-600 body-font w-full bottom-0 left-0 bg-gray-600">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                    <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                        <div className="border-t border-gray-200">
                            <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                                <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start w-full">
                                    <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor="footer-name" className="leading-7 text-sm text-gray-600">
                                                Name:
                                            </label>
                                            <input
                                                type="text"
                                                id="footer-name"
                                                name="name"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={handleChange}
                                                value={formData.name}
                                            />
                                            <br />
                                            <label htmlFor="footer-email" className="leading-7 text-sm text-gray-600">
                                                Email:
                                            </label>
                                            <input
                                                type="text"
                                                id="footer-email"
                                                name="email"
                                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                onChange={handleChange}
                                                value={formData.email}
                                            />
                                            <button
                                                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
                                                type="submit"
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                        <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
                                            Weekly inspirational stories and resources
                                            <br className="lg:block hidden" />
                                            sent directly to your inbox
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100">
                            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                                <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Serenity Harbor —</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default NewsletterSignup;
