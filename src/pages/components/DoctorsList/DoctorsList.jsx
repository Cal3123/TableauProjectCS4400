import React, { useState} from "react";

import DoctorDescription from "../DoctorDescription/DoctorDescription";
import "./DoctorsList.css";

const DoctorsList = (props) => {
  const [query, setQuery] = useState("")

  return (
    <div>
    <div className="Header">
    <input placeholder="Search Doctor Info" onChange={event => setQuery(event.target.value)} />
    </div>
    <ul className="collection">
      {props.items.filter(doctor => {
        if (query === '') {
          return doctor;
        } else if (
          doctor.first_name.toLowerCase().includes(query.toLowerCase()) ||
          doctor.last_name.toLowerCase().includes(query.toLowerCase()) ||
          doctor.city.toLowerCase().includes(query.toLowerCase()) ||
          doctor.speciality.toLowerCase().includes(query.toLowerCase())) {
          return doctor;
        }
      }).map((doctor) => (
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
    </div>
  );
};

export default DoctorsList;
