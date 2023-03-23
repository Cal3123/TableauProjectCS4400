import React from "react";

import DoctorDescription from "../DoctorDescription/DoctorDescription";
import "./DoctorsList.css";

const DoctorsList = (props) => {
  return (
    <ul className="collection">
      {props.items.map((doctor) => (
        <DoctorDescription
          key={doctor.id}
          id={doctor.id}
          onOpenItem={props.onOpenItem}
        >
          <label className="block font-bold mb-2 text-gray-900 dark:text-gray-300 pt-2">
            Name
          </label>
          <div className="block mb-2 text-sm font-medium text-gray-900">
            {doctor.first_name}{" "}{doctor.last_name}
          </div>

          <label className="block font-bold mb-2 text-gray-900 dark:text-gray-300 pt-2">
            Speciality
          </label>
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 pt-2">
            {doctor.speciality}
          </div> 
        </DoctorDescription>
      ))}
    </ul>
  );
};

export default DoctorsList;
