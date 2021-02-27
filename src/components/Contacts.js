import React from 'react';
import "../css/Contacts.css";
import Contact from "./Contact";

function Contacts() {
    return (
        <div className="contacts">
            <Contact
              name="Mahesh Khatiwada"
              phone="9843474204"
              email="maheshkhatiwada17@gmail.com"
            />
            <Contact
              name="Mahesh Khatiwada"
              phone="9843474204"
              email="maheshkhatiwada17@gmail.com"
          />
          <Contact
              name="Mahesh Khatiwada"
              phone="9843474204"
              email="maheshkhatiwada17@gmail.com"
          />
          <Contact
              name="Mahesh Khatiwada"
              phone="9843474204"
              email="maheshkhatiwada17@gmail.com"
          />
        </div>
    )
}

export default Contacts
