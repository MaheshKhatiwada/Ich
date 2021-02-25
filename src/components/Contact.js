import React from 'react'
import "../css/Contact.css";
function Contact({name,phone,email}) {
    return (
        <div className="contact">
            <h1>{name}</h1>
            <p>
                Phone: <a href="#">{phone}</a>
            </p>
            <p>
                Email: <a href="gmail.com">{email}</a>
            </p>
        </div>
    )
}

export default Contact
