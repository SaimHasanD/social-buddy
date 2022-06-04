import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <h2>Don't come here</h2>
            <Link to="/home"><button>Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;