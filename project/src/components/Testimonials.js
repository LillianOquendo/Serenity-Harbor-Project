import React from 'react';

function Testimonials() {
    
const sectionStyle = {
    color: '#374151',
    fontFamily: 'sans-serif',
  };
  
  const containerStyle = {
    margin: '0 auto',
    display: 'flex',
    padding: '5px',
    paddingTop: '24px',
    flexDirection: 'column',
    alignItems: 'center',
  };
  
  const textContainerStyle = {
    flexGrow: 1,
    width: '50%',
    paddingRight: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginBottom: '16px',
    textAlign: 'center',
  };
  
  const headingStyle = {
    fontSize: '3rem',
    fontFamily: 'sans-serif',
    marginBottom: '0.75rem',
    fontWeight: '500',
    color: '#111827',
  };
  
  const paragraphStyle = {
    marginBottom: '2rem',
    lineHeight: '1.7',
  };
  
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };
  
  const buttonStyle = {
    color: 'white',
    backgroundColor: '#6366F1',
    border: 'none',
    padding: '0.5rem 1.5rem',
    outline: 'none',
    borderRadius: '9999px',
    fontSize: '1.25rem',
    cursor: 'pointer',
    marginRight: '0.5rem',
  };
  
  const secondaryButtonStyle = {
    color: '#4B5563',
    backgroundColor: '#F3F4F6',
  };
  
  const imageStyle = {
    objectFit: 'cover',
    objectPosition: 'center',
    borderRadius: '9999px',
    width: '83.333333%',
  };

    const testimonialsData = [
        {
            id: 1,
            name: 'Jessica',
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
