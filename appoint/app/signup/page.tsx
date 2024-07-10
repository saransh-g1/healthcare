import Link from "next/link";

export default function Signup(){
    return(
      
        <div className="flex justify-center items-center w-screen h-screen bg-slate-100">
             <div className="flex flex-col items-center bg-white w-1/3">
                <div className=" flex flex-col items-center my-5">
                <p className="text-3xl font-extrabold mt-5">Get's started !</p>
                <div className="flex justify-center items-center mt-4 mb-4">
                <p className=" text-sm">Already have an account?</p>
                <Link href="/signin" className="underline text-sm">SignIn</Link>
                </div>
                <div className=" my-5">
                    <p className="text-lg">Email:</p>
                    <input className="border w-64 rounded-md h-8 p-1 outline-none" placeholder="abc@gmail.com" type="email"></input>
                </div>
                <div className=" mb-5 mt-2">
                    <p className="text-lg">password:</p>
                    <input className="border w-64  rounded-md h-8 p-1 outline-none" placeholder="asbuhuo" type="password"></input>
                </div>
                 
                 <button className="bg-blue-500 h-10 w-64 font-bold rounded-lg my-5 text-white border border-gray-400">Sign up</button>
             </div>
             </div>
        </div>
    )
}