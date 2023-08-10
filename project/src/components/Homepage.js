import React from "react";

function Homepage(){
    return(
        <div >
            <div className="contact-us bg-gradient-to-r from-cyan-500 to-blue-500">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-5xl py-8">Welcome! Please Explore Our Site!</h2>
      
            <p class="mx-auto max-w-screen-md text-center text-white md:text-xl">We at Serenity Harbor are committed to the wellbeing 
            of our Brooklyn, NY residents. We assist with housing, food insecurity, legal matters, healthcare and housing. </p>
            <br></br>
            <p class="mx-auto max-w-screen-md text-center text-white md:text-xl"> Let us know how we can help you.</p>
          </div>
          {/* <!-- text - end --> */}
      
          <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            {/* <!-- card - start --> */}
            <div>
              <a href="/consultations" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/k4FxSgh/abuse-image10.jpg" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="/consultations" class="text-lg font-bold text-white transition duration-100 lg:text-xl text-center hover:text-customTeal">Request A Consultation</a>
                  
                </div>
      
             
              </div>
            </div>
            {/* <!-- card - end --> */}
      
            {/* <!-- card - start --> */}
            <div>
              <a href="/id_abuse" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/VCzWvmy/abuse-image8.jpg" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="/id_abuse" class="text-lg font-bold text-white transition duration-100 hover:text-customTeal lg:text-xl">Identify Abuse</a>
                
                </div>
      
             
              </div>
            </div>
            {/* <!-- card - end --> */}
      
            {/* <!-- card - start --> */}
            <div>
              <a href="/agencies" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/WPz2f1n/abuse-image3.jpg"  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="/agencies" class="text-lg font-bold text-white transition duration-100 hover:text-customTeal lg:text-xl">Locate Resources in Brooklyn, NY</a>
              
                </div>
      
              </div>
            </div>
            {/* <!-- card - end --> */}
      
            {/* <!-- card - start --> */}
            <div>
              <a href="safety_plan" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                <img src="https://i.ibb.co/9nzBQ4z/abuse-image11.jpg" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              </a>
      
              <div class="flex items-start justify-between gap-2 px-2">
                <div class="flex flex-col">
                  <a href="#" class="text-lg font-bold text-white transition duration-100 hover:text-customTeal lg:text-xl">Create a Safety Plan</a>
                 
                </div>
      
              </div>
            </div>
            {/* <!-- card - end --> */}
          </div>
        </div>
      </div></div>
    )
}
export default Homepage;


// import React from 'react';
// import { Link } from 'react-router-dom';

// function HomePage() {
//     const sectionStyle = {
//         // Section
//         color: '#636363',
//         fontFamily: 'Arial, sans-serif',
//         backgroundColor:'#caf0f8'

//     };

//     const containerStyle = {
//         // Container
//         padding: '5px',
//         margin: 'auto',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',

//     };

//     const headerStyle = {
//         // Header
//         backgroundColor: '#0077B6',
//         color: '#FFFFFF',
//         padding: '6px 0',
//         borderRadius: '6px',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',

//     };

//     const headingStyle = {
//         // Heading
//         flex: '2',
//         fontSize: '1.5rem',
//         fontWeight: 'bold',
//         margin: '0 10px',

//     };

//     const paragraphStyle = {
//         // Paragraph
//         flex: '3',
//         fontSize: '1rem',
//         lineHeight: '1.5',
//         paddingLeft: '10px',
//         alignItems: 'center'

//     };

//     const cardStyle = {
//         // Card
//         padding: '4px',
//         width: '100%',
//         maxWidth: '400px',

//     };

//     const imageStyle = {
//         // Image
//         objectFit: 'cover',
//         objectPosition: 'center',
//         width: '100%',
//         height: 'auto',

//     };

//     const cardHeadingStyle = {
//         // Card Heading
//         fontSize: '1.25rem',
//         fontWeight: 'bold',
//         color: '#111827',
//         margin: '10px 0',

//     };

//     const cardParagraphStyle = {
//         // Card Paragraph
//         fontSize: '1rem',
//         lineHeight: '1.5',
//         margin: '10px 0',

//     };

//     const cardContainerStyle = {
//         // Container for each card
//         background: '#F6F6E9',
//         padding: '10px', 
//         borderRadius: '6px',
//         margin: '10px',
//     };
//     const learnMoreStyle = {
//         // Learn More Link
//         color: '#059669',
//         display: 'inline-flex',
//         alignItems: 'center',
//         marginTop: '10px',
//     };

// //fix routing to indiviual testimonies

//     return (
//         <section style={sectionStyle} className="text-gray-600 body-font">
//             <div style={{ display: 'flex', padding: '6px 0' }}>

//             </div>
//             <div style={containerStyle} className="container px-5 py-24 mx-auto">
//                 <div style={headerStyle} className="flex flex-col">
//                     <div className="h-1 bg-gray-200 rounded overflow-hidden">
                        
//                     </div>

//                 </div>
//                 <div style={{ display: 'flex', margin: '-4px' }}>
//                     {/* Jessica's Card */}
//                     <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
//                         <div className="rounded-lg h-64 overflow-hidden">
//                             <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/NmNt357/Woman3.jpg" />
//                         </div>
//                         <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">Jessica's Story</h2>
//                         <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
//                             Serenity Harbor became my refuge when I thought all hope was lost.
//                         </p>
//                         <Link to="/testimonials#jessicas-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
//                             Learn More
//                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//                             </svg>
//                         </Link>
//                     </div>
//                     {/* Eve's Card */}
//                     <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
//                         <div className="rounded-lg h-64 overflow-hidden">
//                             <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/jzh3ptB/Woman1.jpg" />
//                         </div>
//                         <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">Eve's Story</h2>
//                         <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
//                             The journey to healing was daunting, but Serenity Harbor provided a warm and supportive environment where I felt understood and valued.
//                         </p>
//                         <Link to="/testimonials#eves-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
//                             Learn More
//                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//                             </svg>
//                         </Link>
//                     </div>
//                     {/* Marie's Card */}
//                     <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
//                         <div className="rounded-lg h-64 overflow-hidden">
//                             <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/W6LPqF3/Black-Woman.jpg" />
//                         </div>
//                         <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">Marie's Story</h2>
//                         <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
//                             Serenity Harbor became my lifeline during the darkest days of my life.
//                         </p>
//                         <Link to="/testimonials#maries-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
//                             Learn More
//                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//                             </svg>
//                         </Link>
//                     </div>
//                     {/* David's Card */}
//                     <div style={cardStyle} className="p-4 md:w-1/3 sm:mb-0 mb-6">
//                         <div className="rounded-lg h-64 overflow-hidden">
//                             <img alt="content" style={imageStyle} className="object-cover object-center h-full w-full" src="https://i.ibb.co/nwgL7N7/man1.jpg" />
//                         </div>
//                         <h2 style={cardHeadingStyle} className="text-xl font-medium title-font text-gray-900 mt-5">David's Story</h2>
//                         <p style={cardParagraphStyle} className="text-base leading-relaxed mt-2">
//                             Serenity Harbor gave me the strength and support I needed to break free from the cycle of abuse.
//                         </p>
//                         <Link to="/testimonials#davids-story" style={learnMoreStyle} className="text-green-500 inline-flex items-center mt-3">
//                             Learn More
//                             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
//                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

// export default HomePage;
