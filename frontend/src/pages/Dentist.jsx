import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/dentist.css";
import { Link } from "react-router-dom";
import Top from "../components/Top";
import { useDispatch, useSelector } from "react-redux";
import { Get_Doctors } from "../store/action/GetDoctors";
import Loadingbox from "../components/Loadingbox";
import Messagebox from "../components/Messagebox";

const Dentist = () => {
  const dispatch = useDispatch();
  const doctorsList = useSelector((state) => state.doctorsList);
  const { loading, error, doctors } = doctorsList;

  useEffect(() => {
    dispatch(Get_Doctors());
  }, [dispatch]);

  return (
    <div className="dentist">
      <Header />
      <div className="dentists_content">
        <h1>OUR EXPERT DENTISTS</h1>
        <ul className="dentists_list">
          {loading ? (
            <Loadingbox />
          ) : error ? (
            <Messagebox>{error}</Messagebox>
          ) : (
            doctors.map((doctor) => {
              return (
                <li className="dentist_item" key={doctor._id}>
                  <div className="dentist_image">
                    <figure>
                      <img src={doctor.image} alt="" />
                    </figure>
                  </div>
                  <div className="doctor_details">
                    <h1 className="doctor_name">{doctor.name}</h1>
                    <p>{doctor.education}</p>
                    <Link
                      to={`/dentist/${doctor.name}/${doctor._id}`}
                      className="dental_links"
                    >
                      View Profile
                    </Link>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <Footer />
      <Top />
    </div>
  );
};

export default Dentist;
