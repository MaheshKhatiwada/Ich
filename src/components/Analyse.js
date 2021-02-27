import React from 'react'
import { useHistory } from 'react-router-dom';
import "../css/Analyse.css";

function Analyse() {
    const history=useHistory();
    const handleUpload =(e)=>{
        e.preventDefault();
        history.push("/result");
    };  
    return (
        <div className="analyse">

            <h1>Intracranial Haemorrhage Detection</h1>
            <p>PLEASE,upload the picture below to detect Intracranial Haemorrhage... </p>  
            <button onClick={handleUpload}>Upload</button>          
        </div>
    )
}

export default Analyse
