import { FaCalendarDays } from "react-icons/fa6";

export default function Settings(){
    const date=new Date()

    return(
        <div className="flex flex-col justify-center items-center my-6 py-2  ">
          <div><img src="/bg01.jpg" className="rounded-full h-32 w-32 outline outline-2"/></div>
            
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 justify-self-center mt-6">
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>
           <Card title="string" des="saransh"/>

           </div>
        </div>



    )
}

function Card({title,des}:{title:string,des:string}){
    return(
        <div className="w-80 h-14 rounded-lg text-start  border text-xl  flex items-center justify-start px-2">
          <p>{title}--</p>
          <p className="mx-2">{des}</p>
       </div>
    )
}