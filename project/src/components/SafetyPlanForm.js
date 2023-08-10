import React, { createContext, useContext, useEffect, useState } from "react";

const EmailContext = createContext();

//this hook will consume the email context
const useEmailContext = () => useContext(EmailContext);

function SafetyPlanForm() {
    const [value, setValue] = useState("");
    const [safetyplans, setSafetyPlans] = useState([]);
    const [email, setEmail] = useState("");
    const [question1, setQuestion1] = useState("");
    const [question2, setQuestion2] = useState("");
    const [question3, setQuestion3] = useState("");
    const [question4, setQuestion4] = useState("");
    const [question5, setQuestion5] = useState("");

    useEffect(() => {
        fetch("/generate_safety_plan")
            .then((response) => response.json())
            .then((safetyplans) => setSafetyPlans(safetyplans));
    }, []);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // event.prevent.Default();
        if (!question1 || !question2 || !question3 || !question4 || !question5) {
            alert(
                "Please fill in answers to all questions. If you wish to leave one blank type in 'None'."
            );
            return;
        }
        const new_safety_plan = {
            email: email,
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5,
        };

        fetch("/generate_safety_plan", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(new_safety_plan),
        })
            .then((response) => response.json())
            .then((new_safety_plan) => {
                setSafetyPlans([...safetyplans, new_safety_plan]);

                //form submission confirmation
                setFormSubmitted(true);
            });
    };

    // Send the email data to the backend
    const emailData = {
        username: "Serenity Harbor",
        recipient_email: email, // Use the entered email
        sender_email: "SerenityHarbor.DefaultEmail@gmail.com",
        message:
            "Thank you for trusting us. Please see your safety plan below. Keep it in a safe place incase of emergencies",
    };

    fetch("/send_email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(emailData),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.error("Error sending email:", error);
        });
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <section class=" bg-gradient-to-r from-cyan-500 to-blue-500">
            <div
                id="section-1"
                className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24"
            >
                <div
                    id="div-1"
                    className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full"
                >
                    <div
                        id="div-2"
                        className=" items-center justify-center grid-cols-8 mx-auto shadow-xl lg:grid-cols-8 rounded-xl"
                    >
                        <div id="div-3" className="w-full px-6 py-3">
                            <div id="div-4">
                                <div id="div-5" className="mt-3 text-left sm:mt-5">
                                    <div id="div-6" className="mt-3">
                                        <h3
                                            id="heading-1"
                                            className="text-lg font-bold text-neutral-600 leading-6 lg:text-5xl text-center"
                                        >
                                            Safety Plan Creator
                                        </h3>
                                    </div>
                                    <div
                                        id="div-7"
                                        className="mt-3 text-base text-gray-500 text-center"
                                    >
                                        <p>We're Here to Help</p>
                                    </div>
                                </div>
                            </div>

                            <div id="div-8" className="mt-6 space-y-2 text-center text-lg">
                                <div id="div-9">
                                    <label text-customTeal>
                                        1. Who are your trusted friends, family members, or
                                        neighbors that you can reach out to in case of an emergency?
                                        Include phone numbers if possible
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-10 text-lg">
                                    <label text-customTeal>
                                        2. Is there reliable transportation available to you if you
                                        need to leave quickly, and if not, who can you rely on for
                                        transportation assistance?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-11 text-lg">
                                    <label text-customTeal>
                                        3. List 3 safe location outside your home where you can go
                                        if you feel threatened or need to leave quickly?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-12 text-lg">
                                    <label text-customTeal>
                                        4. Who are the people you can trust and confide in about the
                                        abuse you're experiencing?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                </div>
                                <div id="div-13 text-lg">
                                    <label text-customTeal>
                                        5. Can you provide a physical description of your abuser,
                                        including details such as their gender, age, height, weight,
                                        hair color, eye color, and any distinguishing features or
                                        tattoos?
                                    </label>
                                    <textarea
                                        name="message"
                                        className="h-60 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring focus:border-customTeal"
                                        placeholder="If you have no answer type 'None'"
                                    ></textarea>
                                    <button class="inline-block rounded-lg bg-customTeal px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-customLightBlue transition duration-100 hover:bg-customLightBLue focus-visible:ring active:bg-customLightBlue md:text-base">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SafetyPlanForm;

// import React, { createContext, useContext, useEffect, useState } from "react";

// const EmailContext = createContext();

// //this hook will consume the email context
// const useEmailContext = () => useContext(EmailContext);

// function SafetyPlanForm() {
//     const [value, setValue] = useState("")
//     const [safetyplans, setSafetyPlans] = useState([])
//     const [email, setEmail] = useState("")
//     const [question1, setQuestion1] = useState("")
//     const [question2, setQuestion2] = useState("")
//     const [question3, setQuestion3] = useState("")
//     const [question4, setQuestion4] = useState("")
//     const [question5, setQuestion5] = useState("")

//     useEffect(() => {
//         fetch('/generate_safety_plan')
//             .then(response => response.json())
//             .then(safetyplans => setSafetyPlans(safetyplans))
//     }, [])

//     const [formSubmitted, setFormSubmitted] = useState(false);

//     const handleSubmit = (event) => {
//         // event.prevent.Default();
//         if (!question1 || !question2 || !question3 || !question4 || !question5) {
//             alert("Please fill in answers to all questions. If you wish to leave one blank type in 'None'.");
//             return;
//         }
//         const new_safety_plan = {
//             email: email,
//             question1: question1,
//             question2: question2,
//             question3: question3,
//             question4: question4,
//             question5: question5
//         }

//         fetch('/generate_safety_plan', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(new_safety_plan)
//         })
//             .then(response => response.json())
//             .then(new_safety_plan => {
//                 setSafetyPlans([...safetyplans, new_safety_plan])

//                 //form submission confirmation
//                 setFormSubmitted(true);
//             });
//     }

//     // Send the email data to the backend
//     const emailData = {
//         username: "Serenity Harbor",
//         recipient_email: email, // Use the entered email
//         sender_email: "SerenityHarbor.DefaultEmail@gmail.com",
//         message: "Thank you for trusting us. Please see your safety plan below. Keep it in a safe place incase of emergencies"
//     };

//     fetch('/send_email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify(emailData)
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//         })
//         .catch(error => {
//             console.error('Error sending email:', error);
//         });
//     const handleEmailChange = (event)=>{
//         setEmail(event.target.value);
//     }

//     return (
//         <EmailContext.Provider value={{ email, setEmail }}>
//             <div>
//                 {formSubmitted ? (
//             <p>Thank you for your answers. Please see your generated plan below!</p>
//         ) : (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>
//                         Question 1:
//                         <br></br>
//                         Who are your trusted friends, family members, or neighbors that you can reach out to in case of an emergency?
//                         <br></br>
//                         <input
//                             type="text"
//                             name="question1"
//                             value={question1}
//                             onChange={(e) => { setQuestion1(e.target.value) }}
//                         />
//                     </label>
//                 </div>

//                 <div>
//                     <label>
//                         Question 2:
//                         <br></br>
//                         Is there reliable transportation available to you if you need to leave quickly, and if not, who can you rely on for transportation assistance?
//                         <br></br>
//                         <input
//                             type="text"
//                             name="question2"
//                             value={question2}
//                             onChange={(e) => { setQuestion2(e.target.value) }}
//                         />
//                     </label>
//                 </div>

//                 <div>
//                     <label>
//                         Question 3:
//                         <br></br>
//                         List 3 safe location outside your home where you can go if you feel threatened or need to leave quickly?
//                         <br></br>
//                         <input
//                             type="text"
//                             name="question3"
//                             value={question3}
//                             onChange={(e) => { setQuestion3(e.target.value) }}
//                         />
//                     </label>
//                 </div>

//                 <div>
//                     <label>
//                         Question 4:
//                         <br></br>
//                         Who are the people you can trust and confide in about the abuse you're experiencing?
//                         <br></br>
//                         <input
//                             type="text"
//                             name="question4"
//                             value={question4}
//                             onChange={(e) => { setQuestion4(e.target.value) }}
//                         />
//                     </label>
//                 </div>

//                 <div>
//                     <label>
//                         Question 5:
//                         <br></br>
//                         Can you provide a physical description of your abuser, including details such as their gender, age, height, weight, hair color, eye color, and any distinguishing features or tattoos?
//                         <br></br>
//                         <input
//                             type="text"
//                             name="question5"
//                             value={question5}
//                             onChange={(e) => { setQuestion5(e.target.value) }}
//                         />
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         Email a copy of your safetyplan to yourself:

//                         <br></br>
//                         <input type='email' name='email' value={email} onChange={handleEmailChange} />
//                     </label>
//                 </div>
//                 <br></br>
//                 <button type="submit">Generate Safety Plan</button>
//                 </form>
//             )}
//         </div>
//     </EmailContext.Provider>
// );
//         }
// export default SafetyPlanForm;
