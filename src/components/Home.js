import React from 'react';
import {useHistory} from "react-router-dom";

import "../css/Home.css";

function Home() {
    const history=useHistory();

      const handleStart= (e)=>{
        e.preventDefault();
        history.push("/analyse");
    };
    const handleRead=(e)=>{
        e.preventDefault();
        history.push("/about");
    }


    return (
        <div className="home">
           <div className="home__start">
               <h1>IntraCranial Haemorrhage Detection</h1>
               <p> Click Start Now Button to analyse the result!</p>
               <button  onClick={handleStart}>Start Now</button>
           </div>
           <div className="home__info">
               <h1>Information About IntraCranial Haemorrhage Detection</h1>
               <button onClick={handleRead}> Read About ICH</button>
           </div>
        </div>
    )
}

export default Home ;
