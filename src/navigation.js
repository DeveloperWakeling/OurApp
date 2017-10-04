import React from  'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
    <header>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Test</Link></li>
            </ul>
        </nav>
    </header>
)

export default Navigation;