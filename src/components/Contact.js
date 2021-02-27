import React from 'react'
import { Link } from 'react-router-dom';
import "../css/Contact.css";
function Contact({name,phone,email,rollno}) {
    return (
        <div className="contact">

            <h1>{name}</h1>
            <p>
                RollNo:{rollno}
            </p>
            <p>
                Phone: <Link to="#">{phone}</Link>
            </p>
            <p>
                Email: <Link to="#">{email}</Link>
            </p>
        </div>
    )
}

export default Contact
