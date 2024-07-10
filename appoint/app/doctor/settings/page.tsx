"use client"
import React from "react";
import {Calendar} from "@nextui-org/calendar";
import {today, getLocalTimeZone} from "@internationalized/date";


export default function(){
   let defaultDate = today(getLocalTimeZone());
   let [focusedDate, setFocusedDate] = React.useState(defaultDate);
 return(
    <div style={{width:"1050px"}} className="flex h-max">
       <div className="w-96 bg-blue-400 flex items-center justify-center ">
       <img src="/b8.jpg" className="rounded-full h-80 w-80 border border-slate-400"/>
        </div>
        <div className="bg-blue-200 py-5 text-blue-700 font-semibold  flex flex-col items-center justify-start " style={{width:"666px"}}>
         
            <p className="mb-3">Update your profile here</p>
            <Card t1="Mobile Number" t2="age" p1="8109858874" p2="18"></Card>
           
            <Card t1="hospital/clinic name" t2="Years of Experties" p1="-" p2="5"></Card>
            
            <Card t1="specialization" t2="gender" p1="neuro" p2="female"></Card>

            <div className="flex my-2 ">
            <div className="mx-3">
            <p>offline fees</p>
            <input className="rounded-lg w-40 p-1 outline-none" placeholder="100"></input>
            </div>
            <div className="mx-3">
            <p>online fees</p>
            <input className="rounded-lg w-40 p-1 outline-none" placeholder="200"></input>
            </div>
            </div>

            <div className="ml-3">
            <p>Location</p>
            <input className="rounded-lg  p-1 outline-none" placeholder="---" style={{width:"480px"}}></input>
            </div>

            <div className="mt-5">
               <p >Choose your preferred Days</p>
               <button className="rounded-full text-red-500 bg-blue-400 h-8 w-8">S</button>
               <button className="rounded-full bg-blue-400 h-8 w-8">M</button>
               <button className="rounded-full bg-blue-400 h-8 w-8">T</button>
               <button className="rounded-full bg-blue-400 h-8 w-8">W</button>
               <button className="rounded-full bg-blue-400 h-8 w-8">Th</button>
               <button className="rounded-full bg-blue-400 h-8 w-8">F</button>
               <button className="rounded-full bg-blue-400 h-8 w-8">SA</button>

            </div>
            <p className="mt-3">Choose your preffered time</p>
              <div className="grid grid-cols-5  shadow-2xl gap-x-2 gap-y-3 h-56 w-max p-3 mt-2 justify-self-start bg-white rounded-lg">
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
               <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
               <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>
                <button className="bg-black text-white rounded-lg h-10 px-3 w-max">10.00</button>

              </div>
                
                <div className="mt-4 *:h-10 *:w-36 *:shadow-xl bg-white rounded-lg">
                <button className="mx-4">Change Password</button>
                <button className="mx-4">Save & proceed</button>
                </div>
            </div>
     
         </div>
    
 )
}

function Card({t1,t2,p1,p2}:{t1:string,t2:string,p2:string,p1:string}){
   return(
      <div className="flex my-2  ">
            <div className="mx-3">
            <p>{t1}</p>
            <input className="rounded-lg w-56 p-1 outline-none" placeholder={p1}></input>
            </div>
            <div className="mx-3">
            <p>{t2}</p>
            <input className="rounded-lg w-56 p-1 outline-none" placeholder={p2}></input>
            </div>
            </div>
   )
}