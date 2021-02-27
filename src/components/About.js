import React from 'react'
import "../css/About.css";

function About() {
    return (
        <div className="about">
            <h1>Intracranial Haemorrhage Detection </h1>
            <p>An intracranial hemorrhage is a type of bleeding that occurs inside the skull.
                High blood pressure is the most common cause of ICH. 
                Post partum haemorrhage (PPH) is the leading cause of maternal death worldwide.
            In younger people, another common cause is abnormally formed blood vessels in the brain.Other causes include: head injury or trauma.
            </p>
            <p>Different types of an intracranial hemorrhage are:
                <li>Epidural Hemorrhage</li>
                <li>Subdural Hemorrhage</li>
                <li>Subarachnoid Hemorrhage</li>
                <li>Cerebral Hemorrhage</li>
                <li>Intraparenchymal Hemorrhage</li>
            </p>
            <p>
                Different machine learning algorithms were used to detect whether there is 
                intracranial haemorrhage or not and its subtype were detected from the given 
                 input CT scan images .
            </p>
        </div>
    )
}

export default About;
