import { useState } from "react";

function Greeting (){
    const currentHour  = new Date().getHours();

    let message ;
    if (currentHour <12){
        message = <p>Good Morning ☀️</p>

    }
    else if (currentHour <18){
        message = <p>Good Afternoon 🌤️</p>
    }
    else{
        message = <p>Good Evening 🌙</p>
    }


    return(
        <div className="border border-blue-500 p-4 rounded-lg shadow-md text-left">
            <h1>{message}</h1>
        </div>
    )
}

export default Greeting;