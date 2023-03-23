import React, { useEffect, useState } from "react";
import HeaderAndNavBar from './components/HeaderAndNavBar/HeaderAndNavBar'
import {Doctors} from '../data/Doctors'
import DoctorsList from "./components/DoctorsList/DoctorsList";
import DoctorDetailDescription from "./components/DoctorDetailDescription/DoctorDetailDescription";

function App() {
  const [clickedDoctor, setClickedDoctor] = useState([]);
  const [clickedDoctorSimilarDoctors, setClickedDoctorSimilarDoctors] = useState([]);
  const [displayDoctorDetails, setDisplayDoctorDetails] = useState(false);


  const openEventHandler = (doctorId) => {
    const doctor = Doctors.filter((doctor) => doctor.id === doctorId);
    setClickedDoctor(doctor);
    const similarDoctors = Doctors.filter((item) => (item.speciality === doctor[0].speciality && item.id != doctor[0].id))
    setClickedDoctorSimilarDoctors(similarDoctors)
    setDisplayDoctorDetails(true);
  };

  let display = {};
  if (clickedDoctor.length > 0) {
    display = (
      <DoctorDetailDescription
        item={clickedDoctor}
        similar={clickedDoctorSimilarDoctors}
        setDisplayDoctorDetails={setDisplayDoctorDetails}
        onOpenItem={openEventHandler}
      />
    );
  }
  let content = (
    <p style={{ textAlign: "center" }}>No doctors found. Page down.</p>
  );

  if (Doctors.length > 0) {
    content = (
      <DoctorsList
        items={Doctors}
        onOpenItem={openEventHandler}
      />
    );
  }

  return (
    <>
      <HeaderAndNavBar/>
      {displayDoctorDetails && display}
      <section >{!displayDoctorDetails && content}</section>

       
    </>
  )
}

export default App