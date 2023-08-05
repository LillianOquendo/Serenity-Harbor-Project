import React, { createContext, useContext, useEffect, useState } from "react";

const EmailContext = createContext();

//this hook will consume the email context
const useEmailContext = () => useContext(EmailContext);

function SafetyPlanForm() {
    const [value, setValue] = useState("")
    const [safetyplans, setSafetyPlans] = useState([])
    const [email, setEmail] = useState("")
    const [question1, setQuestion1] = useState("")
    const [question2, setQuestion2] = useState("")
    const [question3, setQuestion3] = useState("")
    const [question4, setQuestion4] = useState("")
    const [question5, setQuestion5] = useState("")

    useEffect(() => {
        fetch('/generate_safety_plan')
            .then(response => response.json())
            .then(safetyplans => setSafetyPlans(safetyplans))
    }, [])

    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleSubmit = (event) => {
        // event.prevent.Default();
        if (!question1 || !question2 || !question3 || !question4 || !question5) {
            alert("Please fill in answers to all questions. If you wish to leave one blank type in 'None'.");
            return;
        }
        const new_safety_plan = {
            email: email,
            question1: question1,
            question2: question2,
            question3: question3,
            question4: question4,
            question5: question5
        }

        fetch('/generate_safety_plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(new_safety_plan)
        })
            .then(response => response.json())
            .then(new_safety_plan => {
                setSafetyPlans([...safetyplans, new_safety_plan])

                //form submission confirmation
                setFormSubmitted(true);
            });
    }

    // Send the email data to the backend
    const emailData = {
        username: "Serenity Harbor",
        recipient_email: email, // Use the entered email
        sender_email: "SerenityHarbor.DefaultEmail@gmail.com",
        message: "Thank you for trusting us. Please see your safety plan below. Keep it in a safe place incase of emergencies"
    };

    fetch('/send_email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Error sending email:', error);
        });  
    const handleEmailChange = (event)=>{
        setEmail(event.target.value);
    }
    
    return (
        <EmailContext.Provider value={{ email, setEmail }}>
            <div>
                {formSubmitted ? (
            <p>Thank you for your answers. Please see your generated plan below!</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Question 1:
                        <br></br>
                        Who are your trusted friends, family members, or neighbors that you can reach out to in case of an emergency?
                        <br></br>
                        <input
                            type="text"
                            name="question1"
                            value={question1}
                            onChange={(e) => { setQuestion1(e.target.value) }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Question 2:
                        <br></br>
                        Is there reliable transportation available to you if you need to leave quickly, and if not, who can you rely on for transportation assistance?
                        <br></br>
                        <input
                            type="text"
                            name="question2"
                            value={question2}
                            onChange={(e) => { setQuestion2(e.target.value) }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Question 3:
                        <br></br>
                        List 3 safe location outside your home where you can go if you feel threatened or need to leave quickly?
                        <br></br>
                        <input
                            type="text"
                            name="question3"
                            value={question3}
                            onChange={(e) => { setQuestion3(e.target.value) }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Question 4:
                        <br></br>
                        Who are the people you can trust and confide in about the abuse you're experiencing?
                        <br></br>
                        <input
                            type="text"
                            name="question4"
                            value={question4}
                            onChange={(e) => { setQuestion4(e.target.value) }}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Question 5:
                        <br></br>
                        Can you provide a physical description of your abuser, including details such as their gender, age, height, weight, hair color, eye color, and any distinguishing features or tattoos?
                        <br></br>
                        <input
                            type="text"
                            name="question5"
                            value={question5}
                            onChange={(e) => { setQuestion5(e.target.value) }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email a copy of your safetyplan to yourself:

                        <br></br>
                        <input type='email' name='email' value={email} onChange={handleEmailChange} />
                    </label>
                </div>
                <br></br>
                <button type="submit">Generate Safety Plan</button>
                </form>
            )}
        </div>
    </EmailContext.Provider>
);
        }
export default SafetyPlanForm;