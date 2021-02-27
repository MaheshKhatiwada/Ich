import React from 'react';
import "../css/Contacts.css";
import Contact from "./Contact";

function Contacts() {
    return (
        <div className="contacts">
            <Contact
              name="Amar Nepali"
              rollno="073BCT603"
              phone="9867253045"
              email="nepaliamar1998@gmail.com"
            />
            <Contact
              name="Anoop BK"
              rollno="073BCT609"
              phone="9827183740"
              email="bkanoop18@gmail.com "
          />
          <Contact
              name="Deepak Bastola"
              rollno="073BCT618"
              phone="9804118512"
              email="deepakbastola2548@gmail.com"
          />
          <Contact
              name="Mahesh Khatiwada"
              rollno="073BCT625"
              phone="9843474204"
              email="maheshkhatiwada17@gmail.com"
          />
        </div>
    )
}

export default Contacts
