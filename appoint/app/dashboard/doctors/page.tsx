import DoctorCard from "@/components/DoctorCard/doctorCard"

export default function AllDoctor(){
    return(
        <div className="grid grid-cols-3 m-4 gap-x-10 w-full">
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
            <DoctorCard></DoctorCard>
        </div>
    )
}