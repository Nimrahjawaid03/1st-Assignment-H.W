import MyImage from "@/components/MyImages";
import React from "react";
export default function Home(){
    return(
        <>
        <div className="text-center text-white p-2 border-2 border-green-700 mt-11 rounded-3xl shadow-green-600 shadow-lg hover:bg-yellow-500">
     <h1 className="font-bold">Hi</h1>
        <h1 className="font-bold">Home Page</h1>
        <p className="text-pink-500 text-2xl text-center mt-5 italic border-b-2 border-green-700 pb-5">"This is nmj! I'm enthusiast based on Governor IT Initiative.I obsessed combining the worlds of logic <br /> and create design to make eye-catching,accessible,and user-friendly websites and applications."</p>
        </div>
        <div className="m-auto mt-10 rounded-2xl w-[30%] border border-3">
            <MyImage/>
        </div>
        </>
    )
}