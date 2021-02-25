import React from 'react';
import "../css/Home.css";

function Home() {

   
    return (
        <div className="home">
           <div className="home__start">
               <h1>IntraCranial Haemorrhage Detection</h1>
               <p> Click Start Now Button to analyse the result!</p>
               <button >Start Now</button>
           </div>
           <div className="home__info">
               <h1>Information About IntraCranial Haemorrhage Detection</h1>
               <button>Read About ICH</button>
           </div>
        </div>
    )
}

export default Home ;
