import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
<h1 id="heading-1" className="text-lg font-bold text-white leading-6 lg:text-5xl text-center">
Serenity Harbor</h1>
<h3 id="heading-1" className="text-lg font-bold text-white leading-6 lg:text-2xl text-center">Rising Above Violence: Embrace the Serenity Within </h3>
      <br></br>
      <div className="container">
        </div>
        <nav className="nav-links">
        <Link to="/">
            Home
        </Link>
        <Link to="/safety_plan" >
            Safety Plan
        </Link>
        <Link to="/id_abuse" >
            Signs of Abuse
        </Link>
        <Link to="/testimonials" >
            Testimonials
        </Link>
        <Link to="/consultations" >
            Consultations
        </Link>
        <Link to="/agencies" >
            Resource Finder
        </Link>
        <Link to='/about_us' >
        About Us
        </Link>
        <Link to="/contact" >
            Contact
        </Link>
        </nav>
      
    </header>
  );
}




export default Navbar;



 // import React from 'react';
// import { Link } from 'react-router-dom';

// 
//         <header style={headerStyle}>
//             <div style={containerStyle}>
//             <Link to="/" style={{ ...logoStyle, ...{ display: 'flex', alignItems: 'center' } }}>
//     <img src="https://i.ibb.co/m4fDvWx/Logo-500x500-px.jpg" alt="Logo" style={{ width: '100px', height: '100px' }} />
//     <span style={{ marginLeft: '30px' }} className="text-xl">
//         Serenity Harbor
//     </span>
// </Link>

//                 <nav style={{ marginLeft: 'auto' }}>
//                     <Link to="/">
//                         Home
//                     </Link>
//                     <Link to="/safety_plan" >
//                         Safety Plan
//                     </Link>
//                     <Link to="/id_abuse" >
//                         Signs of Abuse
//                     </Link>
//                     <Link to="/testimonials" >
//                         Testimonials
//                     </Link>
//                     <Link to="/consultations" >
//                         Consultations
//                     </Link>
//                     <Link to="/agencies" >
//                         Resource Finder
//                     </Link>
//                     <Link to='/about_us' >
//                     About Us
//                     </Link>
//                     <Link to="/contact" >
//                         Contact
//                     </Link>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default NavBar;
