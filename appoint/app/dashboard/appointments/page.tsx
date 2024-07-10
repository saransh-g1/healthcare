import { FaCalendarDays } from "react-icons/fa6";

export default function Sessions(){
    const date=new Date()

    return(
        <div className="" >
              <div className="flex justify-between items-center h-20 " style={{width:"1050px"}}>
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


      <div className="h-80 mx-3 my-3 border border-slate-500 rounded-lg text-lg font-semibold text-slate-700">
        <div className="p-3">
        <p className="font-thin ">Booking Date:- 2024-06-25</p>
        <p className="font-thin">Reference Number:- 00CC-1</p>
        <p className="my-1 ">Test Session</p>
        <p className="my-1">Appointment Number</p>
        
        <p className="text-blue-600 text-3xl my-3">1</p>
        <div className="text-sm font-thin">
        <p>Jashvardhan</p>
        <p>Date:- 2024-07-25</p>
        <p>Timing:-18:00</p>
        </div>
        <button className="bg-blue-300 text-blue-700 rounded-lg h-10 w-96 my-4 text-center">Cancel Booking</button>
        </div>
      </div>
            </div>
    )
}