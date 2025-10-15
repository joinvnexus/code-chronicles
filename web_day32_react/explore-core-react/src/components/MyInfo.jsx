
import React from "react";

const MyInfo= () =>{
    const myname = "projoy";
    const country = "Bangladesh"
    const hobby = "codeing";
    const date = new Date().getFullYear();
    return(
        <div className="border border-blue-500 p-4 rounded-lg shadow-md text-left">
            <h1 className="text-2xl font-bold">MyInfo</h1>
            <p className="text-gray-600">my name is {myname}</p>
            <p className="text-gray-600">I am from {country}</p>
            <p className="text-gray-600">my hobby is {hobby}</p>
            <p className="text-gray-600">today id {date}</p>
        </div>
    )
}

export default MyInfo;
