import React, { useState } from 'react'
import "../css/Result.css";

function Result() {
    const [image,setImage]=useState(null);

    const inputHandler=(e)=>{
        setImage( URL.createObjectURL(e.target.files[0]));
    }


    
    return (
        <div className="result">
            <h1>Result</h1>
                <input  type="file" className="custom-file-input" onChange={inputHandler}/>
            <div className="result__image">
                <img src={image} alt=""/>
            </div>
            <div className="result__answer">
               <p>Accuracy : 99%</p>
               <p>Type:  Epidural Haemorrhage </p>
            </div>
        </div>
    )
}

export default Result
