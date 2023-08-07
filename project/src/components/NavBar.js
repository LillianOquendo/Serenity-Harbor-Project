import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    // Header
    const headerStyle = {
        color: '#F0F3BD',
        fontFamily: 'Arial, sans-serif',
        fontSize: '20px'
    };

    const containerStyle = {
        //Container
        margin: 'auto',
        padding: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#0077B6'
        
    };

    const logoStyle = {
        //Logo
        width: '10px',
        height: '10px',
        color: 'white',
        padding: '20px',
        backgroundColor: '#FFD700',
        borderRadius: '50%',
        
    };

    const linkStyle = {
        //Links
        marginRight: '30px',
        color: '#F0F3BD',
        textDecoration: 'none',
        
    };

    return (
        <header style={headerStyle}>
            <div style={containerStyle}>
                <Link to="/" style={{ ...logoStyle, ...{ display: 'flex', alignItems: 'center' } }}>
                    <svg xmlns="https://i.ibb.co/m4fDvWx/Logo-500x500-px.jpg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style={{ flex: 'none' }} viewBox="0 0 24 24" data-darkreader-inline-stroke="">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span style={{ marginLeft: '30px' }} className="text-xl">
                        Serenity Harbor
                    </span>
                </Link>
                <nav style={{ marginLeft: 'auto' }}>
                    <Link to="/" style={linkStyle}>
                        Home
                    </Link>
                    <Link to="/safety_plan" style={linkStyle}>
                        Safety Plan
                    </Link>
                    <Link to="/id_abuse" style={linkStyle}>
                        Signs of Abuse
                    </Link>
                    <Link to="/testimonials" style={linkStyle}>
                        Testimonials
                    </Link>
                    <Link to="/consultations" style={linkStyle}>
                        Consultations
                    </Link>
                    <Link to="/contact" style={linkStyle}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
