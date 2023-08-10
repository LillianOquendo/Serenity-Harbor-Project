// import React from 'react';

// function Testimonials() {
//   return (
//     <section className="overflow-hidden">
//       <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
//         <div className="grid items-start grid-cols-1 md:grid-cols-2">
//           <div className="lg:pr-24 md:pr-12">
//             <h2 className="mt-6 text-3xl font-medium text-black">
//               I am a slightly longer heading that the others and I am align to the
//               left
//             </h2>
//             <p className="mt-5 text-base text-gray-500">
//               Receive dividends bull investment mutual funds rise federal funds
//               strategy substantially treasury municipal public index funds.
//             </p>
//             <ul className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6">
//               <li className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
//                 ❖
//               </li>
//               <li>
//                 <p className="mt-5 text-lg font-medium leading-6 text-black">
//                   Prebuilt integrations
//                 </p>
//                 <p className="mt-2 text-base text-gray-500">
//                   Municipal management performance corporate investment grade bonds.
//                 </p>
//               </li>
//               <li className="flex items-center justify-center w-12 h-12 text-black bg-gray-100 rounded-xl">
//                 ❖
//               </li>
//               <li>
//                 <p className="mt-5 text-lg font-medium leading-6 text-black">
//                   Tools for every stack
//                 </p>
//                 <p className="mt-2 text-base text-gray-500">
//                   Corporate bonds debt fiat risk return municipal bonds retirement
//                   interest rate.
//                 </p>
//               </li>
//             </ul>
//           </div>
//           <div className="h-full mt-12 lg:mt-0 border-t border-mercury-400 lg:border-l lg:pl-24 md:pl-12">
//             <img
//               alt="Lexington thumbnail"
//               className="object-cover bg-gray-300 rounded-full"
//               src="../images/placeholders/square3.svg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;


    
    
    import React from 'react';

    const sectionStyle = {
      color: '#636363',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '4rem'
    };
    
    const imgStyle = {
      width: '100%',
      maxWidth: '720px',
      objectFit: 'cover',
      objectPosition: 'center center',
      borderRadius: '100px',
      marginBottom: '1.5rem',
    };
    
    const contentStyle = {
      textAlign: 'center',
      width: '100%',
      maxWidth: '720px',
    };
    
    const titleStyle = {
      fontSize: '3rem',
      fontWeight: '500',
      marginBottom: '1rem',
      color: '#000000',
    };
    
    const textStyle = {
      marginBottom: '2rem',
      lineHeight: '1.6',
    };
    
    function Testimonials() {
      return (
        <section style={sectionStyle} className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              style={imgStyle}
              alt="Jessica"
              src="https://i.ibb.co/NmNt357/Woman3.jpg"
              
            />
            <div id='jessicas-story' style={contentStyle}>
              <h1 style={titleStyle}>
                Jessica's Story
              </h1>
              <p style={textStyle}>
              I finally found the courage to leave my abusive partner. Serenity Harbor helped me through the
              toughest times and provided me with a safety plan that saved my life. The supportive staff at
              Serenity Harbor not only gave me a safe haven but also connected me with counseling services
              that allowed me to heal from the emotional scars of my past. Their commitment to my well-being
              was truly exceptional, and I'm forever grateful for the resources they offered during my journey
              to recovery. The sense of empowerment and strength I gained from their guidance has transformed
              my life, allowing me to reclaim my independence and rebuild a brighter future for myself and my
              children. Serenity Harbor's unwavering support and invaluable assistance have been an instrumental
              part of my newfound resilience and happiness.
              </p>
            <br></br>
            </div>
          </div>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              style={imgStyle}
              alt="David"
              src="https://i.ibb.co/nwgL7N7/man1.jpg"
            />
            <div id='davids-story' style={contentStyle}>
              <h1 style={titleStyle}>
                David's Story
              </h1>
              <p style={textStyle}>
              Leaving an abusive relationship was the scariest decision I ever made, but I am so grateful
              for the support I received from Serenity Harbor. Their understanding and nonjudgmental approach
              created a safe space where I could openly share my experiences and fears as a man seeking help.
              The counselors at Serenity Harbor guided me through the process of breaking free from the cycle
              of abuse, helping me develop strategies to rebuild my life and regain my self-esteem. Their
              tailored guidance didn't just stop at emotional support – they also provided practical resources
              that empowered me to secure housing and legal assistance. Serenity Harbor's steadfast commitment
              to helping men like me escape abusive situations is truly commendable, and I want to express my
              heartfelt gratitude for the role they played in my journey to healing and rediscovering my sense
              of self-worth. Thanks to their consistent assistance, I now stand on the path to a brighter and
              more positive future.
              </p>
            </div>
          </div>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              style={imgStyle}
              alt="Marie"
              src="https://i.ibb.co/W6LPqF3/Black-Woman.jpg"
            />
            <div id='maries-story' style={contentStyle}>
              <h1 style={titleStyle}>
                Marie's Story
              </h1>
              <p style={textStyle}>
              I had the courage to leave my abusive partner, but the road ahead seemed uncertain and frightening.
              That's when I discovered Serenity Haven, a sanctuary of support that helped me turn my life around.
              The empathetic team at Serenity Haven not only listened to my story but also provided me with a 
              personalized plan to rebuild my life. Their guidance went beyond emotional assistance; they 
              connected me with legal experts who ensured my safety and helped me navigate the legal complexities
              of my situation. Through individual counseling and empowering group sessions, I found solace in the
              company of other survivors who understood my journey. Serenity Haven's consistent dedication to my
              well-being has been a lifeline, giving me the strength to overcome the trauma and regain my sense
              of self-worth. Today, I stand as a testament to the transformative power of support and the 
              resilience of the human spirit, all thanks to Serenity Haven's unwavering commitment to survivors
              like me.
              </p>
            </div>
          </div>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              style={imgStyle}
              alt="Eve"
              src="https://i.ibb.co/jzh3ptB/Woman1.jpg"
            />
            <div id='eves-story'style={contentStyle}>
              <h1 style={titleStyle}>
                Eve's Story
              </h1>
              <p style={textStyle}>
              Summoning the courage to break free from my abusive partner marked a pivotal moment in my life.
              At that daunting crossroads, Serenity Harbor stepped in to provide the guidance I desperately 
              needed. The compassionate team there not only believed in my journey but also offered a customized
              roadmap for my recovery. Their guidance extended far beyond emotional support – they connected me
              with experts who helped me understand my legal options and secure my safety. Engaging in their
              group therapy sessions allowed me to connect with others who had walked a similar path,
              fostering a sense of camaraderie and shared strength. Serenity Harbor consistently championed 
              my well-being, providing me with tools to rebuild my self-esteem and a new sense of purpose. 
              Their unyielding dedication to survivors like me has been a beacon of hope, igniting a spark 
              of transformation and resilience within me. Today, as I stand on the shores of a brighter future, 
              I owe a debt of gratitude to Serenity Harbor for helping me rewrite the narrative of my life.
              </p>
        
            </div>
          </div>
        </section>
      );
    }
    
    export default Testimonials;
