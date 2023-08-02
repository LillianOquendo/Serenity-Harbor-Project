import React, { useState } from 'react';




//figure out how to send copy of safety plan to user's email
function SafetyPlanForm() {
    const [formData, setFormData] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
    });
    const [actionPlan, setActionPlan] = useState(" ");

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        const { question1, question2, question3, question4, question5 } = formData;
        fetch('/generate_safety_plan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
// Process the data and generate the action plan
                const newActionPlan = generateActionPlan(data); 
                setActionPlan(newActionPlan);
            });
    }



function generateActionPlan(data) {


    return (
        `Action Plan:\n` +
        `1. Reach out to trusted friends, family members, or neighbors: ${data.question1}\n` +
        `2. Reliable transportation options or assistance: ${data.question2}\n` +
        `3. Safe locations outside your home: ${data.question3}\n` +
        `4. People you can trust and confide in about the abuse: ${data.question4}\n` +
        `5. Physical description of the abuser: ${data.question5}\n`
    );
}
return (
    <div>
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
                        value={formData.question1}
                        onChange={handleChange}
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
                        value={formData.question2}
                        onChange={handleChange}
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
                        value={formData.question3}
                        onChange={handleChange}
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
                        value={formData.question4}
                        onChange={handleChange}
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
                        value={formData.question5}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <br></br>
            <button type="submit">Generate Safety Plan</button>
            {actionPlan && <div>{actionPlan}</div>} {/* Display the action plan */}
        </form>
    </div>
);
};

export default SafetyPlanForm;