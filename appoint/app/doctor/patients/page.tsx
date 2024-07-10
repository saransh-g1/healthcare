import { FaCalendarDays } from "react-icons/fa6";
import { PiCaretUpDownFill } from "react-icons/pi";

export default function Sessions(){
    const date=new Date()

    return(
        <div className="" style={{width:"1050px"}}>
              <div className="flex justify-between items-center h-20 " >
                <div className="flex justify-around items-center">
                <button className="bg-blue-300 text-blue-800 h-12 w-36 rounded-xl mx-4">Back</button>
        <h2 className="text-xl font-bold " >Session</h2>
        </div>
        <div className="flex">
            <div className="mr-2" >
            <p className=" text-sm">Today's date</p>
          
            <p className="text-lg font-semibold" style={{marginTop:"-8px"}}> {date.getDate()}-{date.getMonth()}-{date.getFullYear()} </p>
            </div>
       <div className="h-12 w-12 bg-slate-100 rounded-lg flex justify-center items-center"><FaCalendarDays size={30}></FaCalendarDays></div> 
        </div>
    </div>
         <p className="text-3xl font-semibold mx-3 my-2">My Bookings</p>
        


      <div className="border rounded-lg h-10 mx-3 mt-2">
          
      </div>

     <div>
    <div className="border-2 mb-2 bg-blue-200 mx-3 rounded-lg mt-5 h-10 flex *:flex *:items-center *:justify-between *:border-r *:w-1/5 *:px-3 *:h-full">
         <div >Name of Patient <PiCaretUpDownFill/></div>
         <div >prescription <PiCaretUpDownFill/></div>
         <div >meet Link <PiCaretUpDownFill/></div>
         <div >Meeting Time <PiCaretUpDownFill/></div>
         <div >Status <PiCaretUpDownFill/></div>
         </div>
         <Card/>
    </div>
            </div>
    )
}

function Card(){
    return(
        <div className="h-10 mx-3 border  flex items-center *:flex *:items-center *:justify-center *:border-r-2 *:h-full flex justify-between *:w-1/5" >
          <div className="w-max px-4">Saransh Test Patient</div>
        <div>  <button className="w-max px-3 rounded-full h-6 bg-indigo-200 ">view</button></div>
           <div className="w-max px-3"><input className="w-20 rounded-l-full outline-none border p-2 h-6" placeholder="link"></input>< button className="w-16 bg-indigo-200 rounded-r-full">send</button></div>
           <div className="w-max px-3">16:30</div>
        <div><button className="w-max px-3 rounded-full h-6 bg-yellow-300 ">pending</button></div>
        </div>
    )
}