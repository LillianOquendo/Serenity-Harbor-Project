import React from 'react';

function Testimonials() {

    const testimonialsData = [
        {
            id: 1,
            name: 'Alice',
            message: 'I finally found the courage to leave my abusive partner. Serenity Harbor helped me through the toughest times and provided me with a safety plan that saved my life.',
        },
        {
            id: 2,
            name: 'Bob',
            message: 'Leaving an abusive relationship was the scariest decision I ever made, but I am so grateful for the support I received from Serenity Harbor. The safety plan they provided gave me the guidance I needed to start over.',
        },
        {
            id: 3,
            name: 'Eve',
            message: 'After years of suffering, I reached out to Serenity Harbor for help. They not only listened to my story but also helped me create a safety plan that empowered me to escape the abuse and build a better future for myself.',
        },
    ];

    return (
        <div>
            <h2>Testimonials</h2>
            {testimonialsData.map((testimonial) => (
                <div key={testimonial.id}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.message}</p>
                </div>
            ))}
        </div>
    );
}

export default Testimonials;
