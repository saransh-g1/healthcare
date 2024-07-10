import { FaCalendarDays } from "react-icons/fa6";


export default function SettingLayout({children}: Readonly<{
    

    children: React.ReactNode;
  }>){

    const date=new Date()
    return(
       <div className="">
          <div>
        <div className="flex justify-between items-center h-20 " style={{width:"1050px"}}>
           
        <div className="flex justify-around items-center">
        <button className="bg-blue-300 text-blue-800 h-12 w-36 rounded-xl mx-4">Back</button>
<h2 className="text-xl font-bold " >Settings</h2>
</div>
<div className="flex">
    <div className="mr-2" >
    <p className=" text-sm">Today's date</p>
  
    <p className="text-lg font-semibold" style={{marginTop:"-8px"}}> {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </p>
    </div>
<div className="h-12 w-12 bg-slate-100 rounded-lg flex justify-center items-center"><FaCalendarDays size={30}></FaCalendarDays></div> 
</div>
</div>
<div className="h-12 flex items-center justify-between mx-3 text-xl font-semibold border-b-2" style={{width:"1050px"}}>
<button className="focus:border-b-4 h-12 border-blue-400 ">My profile</button>
   <button className="focus:border-b-4 h-12 border-blue-400 ">Change Account Settings</button>
   <button className="focus:border-b-4 h-12  border-blue-400" >Delete Account</button>
</div>
</div>

          {children}
          </div>
       
    )
}