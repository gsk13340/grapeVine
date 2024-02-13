// Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className='contact'>Contact Us</h1>
            <p className='contactInfo'>If you would like to submit an event to be featured on GrapeVine
            please email us. If you have any questions, do not hesitate to reach out. 
            </p>
           
            <ul className='contactInfo'>
                <li>Email: info@grapevine.com</li>
                <li>Phone: 123-456-7890</li>
                <li>Address: 123 Main St, Atlanta, GA</li>
            </ul>
        </div>
    );
}

export default Contact;
