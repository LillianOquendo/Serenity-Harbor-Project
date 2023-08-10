import React from "react";

function NewsletterSignup() {
    return (

        <footer id="1" className="bg-white">
  <div id="2" className="bg-customTeal py-6">
    <div id="3" className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div id="4" className="flex flex-col items-center justify-between gap-2 md:flex-row">
                        <div id='5' className="mb-3 text-center md:mb-0 md:text-left">
                            <span  className="font-bold uppercase tracking-widest text-gray-100">
                                Newsletter
                            </span>
                            <p  className="text-indigo-200">Subscribe to our newsletter</p>
                        </div>

                        <form id='6'className="flex w-full gap-2 md:max-w-md">
                            <input
                                placeholder="Email"
                                className="w-full flex-1 rounded border border-white bg-white px-3 py-2 text-customTeal placeholder-customTeal outline-none ring-customTeal transition duration-100 focus:ring"
                            />

                            <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-customTeal outline-none ring-customLightBlue transition duration-100">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>



            <div id="7" className="border-t py-4 text-center text-sm text-gray-400">
                © 2023 - Created by Lillian Oquendo
            </div>


        </footer>
    );
}

export default NewsletterSignup;


// import React, { useState, useEffect } from 'react';

// function NewsletterSignup() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//     });

//     const [subscribers, setSubscribers] = useState([]);
//     const [formSubmitted, setFormSubmitted] = useState(false)

//     useEffect(() => {
//         fetch('/newsletter')
//             .then((response) => response.json())
//             .then((subscribers) => setSubscribers(subscribers));
//     }, []);

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const new_subscriber = {
//             name: formData.name,
//             email: formData.email,
//         };

//         fetch('/newsletter', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//             },
//             body: JSON.stringify(new_subscriber),
//         })
//             .then((response) => response.json())
//             .then((new_subscriber) => {
//                 setSubscribers([...subscribers, new_subscriber]);
//                 setFormSubmitted(true);

//                 //clear fields after submission
//                 setFormData({
//                     name: '',
//                     email: '',
//                 });
//             });
//     };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     const sectionStyle = {
//         // Section
//         color: '#636363',
//         fontFamily: 'Arial, sans-serif',
//         minHeight: '10vh',
//         flexDirection: 'column',

//     };

//     const footerStyle = {
//         // Footer
//         backgroundColor: '#0077B6',
//         color: '#FFFFFF',
//         padding: '6px 0',
//         borderRadius: '6px',
//         marginTop: 'auto',

//     };

//     return (
//         <section style={sectionStyle} className="text-gray-100 body-font">
//             <footer style={footerStyle} className="text-gray-100 body-font w-full bottom-0 left-0 bg-gray-100">
//                 <div className="container px-5 py-24 mx-auto">
//                     <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
//                         <div className="lg:w-1/6 md:w-1/2 w-full px-4">
//                             <div className="border-t border-gray-200">
//                                 <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
//                                     <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start w-full">
//                                         <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
//                                             <form onSubmit={handleSubmit}>
//                                                 <label htmlFor="footer-name" className="leading-7 text-sm text-gray-600">
//                                                     Name:
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     id="footer-name"
//                                                     name="name"
//                                                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                                                     onChange={handleChange}
//                                                     value={formData.name}
//                                                 />
//                                                 <br />
//                                                 <label htmlFor="footer-email" className="leading-7 text-sm text-gray-600">
//                                                     Email:
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     id="footer-email"
//                                                     name="email"
//                                                     className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                                                     onChange={handleChange}
//                                                     value={formData.email}
//                                                 />
//                                                 <button
//                                                     className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"
//                                                     type="submit"
//                                                 >
//                                                     Subscribe
//                                                 </button>
//                                             </form>
//                                             <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">
//                                                 Weekly inspirational stories and resources
//                                                 <br className="lg:block hidden" />
//                                                 sent directly to your inbox
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="bg-gray-100">
//                                 <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
//                                     <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Serenity Harbor —</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//         </section>
//     );
// }

// export default NewsletterSignup;
