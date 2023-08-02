//Physical abuse 


import React from 'react';

function IdAbuse() {
    // Example data for types of abuse
    const abuseData = [
        {
            id: 1,
            type: 'Physical Abuse',
            description: `Physical abuse is a readily recognizable form of mistreatment that revolves around the utilization
        of physical violence or the threat of it to exert control
        over an individual. As a consequence, survivors live in fear
        and uncertainty, anticipating further instances of abuse.
        This often reinforces the regular application of other, 
        more covert forms of abuse.`,
        },
        {
            id: 2,
            type: 'Emotional Abuse',
            description: `Emotional abuse, also known as psychological abuse, is a form of mistreatment where one person
        seeks to control, manipulate, or undermine the emotional well-being and self-esteem of another individual.
        This type of abuse does not involve physical violence but relies on various tactics aimed at causing emotional
        pain, fear, and confusion. Emotional abuse can occur in personal relationships, such as within families, 
        romantic partnerships, friendships, or workplace dynamics.`,
        },
        {
            id: 3,
            type: 'Verbal Abuse',
            description: `Financial abuse is a form of control and manipulation that occurs when one person exerts power
        over another individual's financial resources or economic well-being to gain dominance and limit their independence.
        This type of abuse is often associated with intimate partner relationships, where the abuser exploits the victim's
        financial vulnerabilities and resources to maintain control. However, it can also happen in other contexts, such
        as family settings or caregiver relationships.`,
        },

    ];

    return (
        <div>
            <h2>Types of Abuse</h2>
            {abuseData.map((abuse) => (
                <div key={abuse.id}>
                    <h3>{abuse.type}</h3>
                    <p>{abuse.description}</p>
                </div>
            ))}
        </div>
    );
}

export default IdAbuse;
