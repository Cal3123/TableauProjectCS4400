import React from "react";
import DoctorDescription from "../DoctorDescription/DoctorDescription";

const DoctorDetailDescription = (props) => {
    const handleClose = () => {
        props.setDisplayDoctorDetails(false);
    }
    props.similar.sort((a,b)=> a.fees - b.fees)
    
  return (
        <>     
            <div className="relative w-6/12 my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">Doctor's Detail Description</h3>
                </div>
                <div className="relative p-6 flex-auto">
                    <label className="block font-bold mb-2 text-gray-900 pt-2">
                    Name
                    </label>
                    <div className="block mb-2 text-sm font-medium text-gray-900">
                    {props.item[0].first_name}{" "}{props.item[0].last_name}
                    </div>

                    <label className="block font-bold mb-2 text-gray-900  pt-2">
                    Speciality
                    </label>
                    <div className="block mb-2 text-sm font-medium text-gray-900  pt-2">
                    {props.item[0].speciality}
                    </div>

                    <label className="block font-bold mb-2 text-gray-900  pt-2">
                    Location
                    </label>
                    <div className="block mb-2 text-sm font-medium text-gray-900  pt-2">
                    {props.item[0].address}{" "}{props.item[0].city}{", "}{props.item[0].state}
                    </div>

                    <label className="block font-bold mb-2 text-gray-900  pt-2">
                    Phone Number
                    </label>
                    <div className="block mb-2 text-sm font-medium text-gray-900  pt-2">
                    {props.item[0].phone_number}
                    </div> 
                    
                    <label className="block font-bold mb-2 text-gray-900  pt-2">
                    Other {" "} {props.item[0].speciality.toLowerCase()}{"s"}{" "} are listed below.{" "}
                    {props.item[0].speciality}{"s"}{" "} are prioritized or listed in order of the smallest fee charged for visit and diagnosis to highest fee charged.
                    </label>
                    <ul className="collection">
                        
                        {props.similar.map((doctor) => (
                            <DoctorDescription
                            key={doctor.id}
                            id={doctor.id}
                            onOpenItem={props.onOpenItem}
                            >
                            <label className="block font-bold mb-2 text-gray-900  pt-2">
                                Name
                            </label>
                            <div className="block mb-2 text-sm font-medium text-gray-900">
                                {doctor.first_name}{" "}{doctor.last_name}
                            </div>

                            <label className="block font-bold mb-2 text-gray-900  pt-2">
                                Speciality
                            </label>
                            <div className="block mb-2 text-sm font-medium text-gray-900  pt-2">
                                {doctor.speciality}
                            </div> 
                            </DoctorDescription>
                        ))}
                    </ul>                    

                    {/*Footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    </div>
                </div>
            </div>
            
        </>
  );
};

export default DoctorDetailDescription;