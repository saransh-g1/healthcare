import { FaCalendarDays } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function Info(){
    const date=new Date()

    return(
        <div>
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

<div className="bg-gray-100 h-max mx-3 rounded-lg flex flex-col justify-start p-2" style={{width:"1050px"}}>
 
 <p className="my-2 text-xl font-semibold text-indigo-800">How to get rid of High blood Pressure | New Remedy</p>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius quam quasi. Error et ab id magni delectus! Rem voluptatem earum eveniet, explicabo, incidunt ipsam tempore, consequatur soluta voluptatum error eaque ullam maiores numquam voluptatibus obcaecati fuga accusantium delectus autem alias quam. Doloremque omnis ducimus ullam repudiandae optio, fugiat commodi.</p>
 <div className="flex justify-between items-center" >
 <h1 className="text-indigo-500 font-bold my-2">Dr. Debnath sarkar</h1>
 <div className="flex *:text-yellow-500">
 <FaStar />
 <FaStar />
 <FaStar />
 <FaStar />
 <FaStar />
 </div>
 </div>
 <div className="flex justify-between items-center">
    <div className="flex *:m-3">
 <AiOutlineLike size={25} />
 <AiOutlineDislike size={25}/>
 </div>
 <div> {date.getDate()}-{date.getMonth()}-{date.getFullYear()}</div>
 </div>
</div>
</div>
    )
}