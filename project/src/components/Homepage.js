import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const sectionStyle = {
        // Section
        color: '#636363',
        fontFamily: 'Arial, sans-serif',
        backgroundColor:'#caf0f8'

    };

    const containerStyle = {
        // Container
        padding: '5px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',

    };

    const headerStyle = {
        // Header
        backgroundColor: '#0077B6',
        color: '#FFFFFF',
        padding: '6px 0',
        borderRadius: '6px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    };

    const headingStyle = {
        // Heading
        flex: '2',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        margin: '0 10px',

    };

    const paragraphStyle = {
        // Paragraph
        flex: '3',
        fontSize: '1rem',
        lineHeight: '1.5',
        paddingLeft: '10px',
        alignItems: 'center'

    };

    const cardStyle = {
        // Card
        padding: '4px',
        width: '100%',
        maxWidth: '400px',

    };

    const imageStyle = {
        // Image
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: 'auto',

    };

    const cardHeadingStyle = {
        // Card Heading
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#111827',
        margin: '10px 0',

    };

    const cardParagraphStyle = {
        // Card Paragraph
        fontSize: '1rem',
        lineHeight: '1.5',
        margin: '10px 0',

    };

    const cardContainerStyle = {
        // Container for each card
        background: '#F6F6E9',
        padding: '10px', 
        borderRadius: '6px',
        margin: '10px',
    };
    const learnMoreStyle = {
        // Learn More Link
        color: '#059669',
        display: 'inline-flex',
        alignItems: 'center',
        marginTop: '10px',
    };

//fix routing to indiviual testimonies

    return (
        <section style={sectionStyle} className="text-gray-600 body-font">
            <div style={{ display: 'flex', flexWrap: 'wrap', padding: '6px 0' }}>

                <p style={paragraphStyle} className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                    "Rising Above Violence: Embrace the Serenity Within"
                </p>
            </div>
            <div style={containerStyle} className="container px-5 py-24 mx-auto">
                <div style={headerStyle} className="flex flex-col">
                    <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        <div className="w-24 h-full bg-green-500"></div>
                    </div>

                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '-4px' }}>
                    {/* Jessica's Card */}
                    <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/NmNt357/Woman3.jpg" />
                        </div>
                        <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">Jessica's Story</h2>
                        <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
                            Serenity Harbor became my refuge when I thought all hope was lost.
                        </p>
                        <Link to="/testimonials#jessicas-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                    {/* Eve's Card */}
                    <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/jzh3ptB/Woman1.jpg" />
                        </div>
                        <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">Eve's Story</h2>
                        <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
                            The journey to healing was daunting, but Serenity Harbor provided a warm and supportive environment where I felt understood and valued.
                        </p>
                        <Link to="/testimonials#eves-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                    {/* Marie's Card */}
                    <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/W6LPqF3/Black-Woman.jpg" />
                        </div>
                        <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">Marie's Story</h2>
                        <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
                            Serenity Harbor became my lifeline during the darkest days of my life.
                        </p>
                        <Link to="/testimonials#maries-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                    {/* David's Card */}
                    <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/nwgL7N7/man1.jpg" />
                        </div>
                        <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">David's Story</h2>
                        <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
                            Serenity Harbor gave me the strength and support I needed to break free from the cycle of abuse.
                        </p>
                        <Link to="/testimonials#davids-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
                            Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomePage;
