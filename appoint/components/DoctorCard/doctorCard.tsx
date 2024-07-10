export default function DoctorCard(){
    return(
        <div className="h-max w-72 border shadow-2xl my-3 rounded-2xl">
            <img src="/patient.jpg" className="w-full h-48 rounded-2xl"></img>
            <div className="px-2">
                <div className="flex justify-between my-1">
                <p className="font-semibold text-red-500">jashwardhan</p>
                <p>5 Stars</p>
                </div>
                <div>
                    <p>MBBS in neuroScience</p>
                    <div >
                    <p className="text-sm">Location at:</p>
                    <button className="text-lg font-semibold rounded-2xl bg-blue-600 w-32 my-2 h-10 text-white">Schedule </button>
                    </div>
                </div>
            </div>
        </div>
    )
}