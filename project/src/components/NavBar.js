import React from "react";

function Navbar() {


    return (
        <header className={` items-center w-full bg-customTeal`}>
            <div className="container">
                <div className="relative flex items-center justify-end -mx-4">
                    <div>
                        <a href="/#" className="block w-full py-5">
                            <img
                                src="https://i.ibb.co/m4fDvWx/Logo-500x500-px.jpg"
                                alt="logo"
                                className="min-w-fit min-h-fit"
                            />
                        </a>
                    </div>
                    <div className="items-center justify-between w-full px-4">
                        <div>
                            <nav
                            
                            >
                                <ul className="block  justify-end">
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/#"
                                    >
                                        Home
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/safety_plan"
                                    >
                                        Safety Plan
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/testimonials"
                                    >
                                        Testimonials
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/id_abuse"
                                    >
                                        Signs of Abuse
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/agencies"
                                    >
                                        Resource Finder
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/about_us"
                                    >
                                        About
                                    </ListItem>
                                    <ListItem
                                        navItemStyles="text-customLightBlue text-4xl hover:text-primary"
                                        NavLink="/contact"
                                    >
                                        Contact
                                    </ListItem>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

const ListItem = ({ children, navItemStyles, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
                >
                    {children}
                </a>
            </li>
        </>
    );
};

// import React from 'react';
// import { Link } from 'react-router-dom';

// function NavBar() {
//     // Header
//     const headerStyle = {
//         color: '#F0F3BD',
//         fontFamily: 'Arial, sans-serif',
//         fontSize: '20px'
//     };

//     const containerStyle = {
//         //Container
//         margin: 'auto',
//         padding: '5px',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#05668D',
//         height: '100px'

//     };

//     const logoStyle = {
//         //Logo
//         width: '10px',
//         height: '10px',
//         color: 'white',
//         padding: '20px',

//         borderRadius: '50%',

//     };

//     const linkStyle = {
//         //Links
//         marginRight: '30px',
//         color: '#F0F3BD',
//         textDecoration: 'none',

//     };

//     return (
//         <header style={headerStyle}>
//             <div style={containerStyle}>
//             <Link to="/" style={{ ...logoStyle, ...{ display: 'flex', alignItems: 'center' } }}>
//     <img src="https://i.ibb.co/m4fDvWx/Logo-500x500-px.jpg" alt="Logo" style={{ width: '100px', height: '100px' }} />
//     <span style={{ marginLeft: '30px' }} className="text-xl">
//         Serenity Harbor
//     </span>
// </Link>

//                 <nav style={{ marginLeft: 'auto' }}>
//                     <Link to="/" style={linkStyle}>
//                         Home
//                     </Link>
//                     <Link to="/safety_plan" style={linkStyle}>
//                         Safety Plan
//                     </Link>
//                     <Link to="/id_abuse" style={linkStyle}>
//                         Signs of Abuse
//                     </Link>
//                     <Link to="/testimonials" style={linkStyle}>
//                         Testimonials
//                     </Link>
//                     <Link to="/consultations" style={linkStyle}>
//                         Consultations
//                     </Link>
//                     <Link to="/agencies" style={linkStyle}>
//                         Resource Finder
//                     </Link>
//                     <Link to='/about_us' style={linkStyle}>
//                     About Us
//                     </Link>
//                     <Link to="/contact" style={linkStyle}>
//                         Contact
//                     </Link>
//                 </nav>
//             </div>
//         </header>
//     );
// }

// export default NavBar;
