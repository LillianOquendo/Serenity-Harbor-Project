import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/safety-plan">Safety Plan</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to ="/testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link to ="/id-abuse"> Signs of Abuse</Link>
                </li>
                <li>
                    <Link to ="/consultations"> Consultations</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
