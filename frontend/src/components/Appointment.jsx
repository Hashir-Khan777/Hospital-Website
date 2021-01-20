import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import Footer from "../components/Footer";
import "../css/appointment.css";
import Top from "./Top";
import { AppointmentBooked } from "../store/action/GetDoctors";

const Appointment = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDOB] = useState();
  const [num, setNum] = useState();
  const [sex, setSex] = useState();
  const [appointmentDate, setappointmentDate] = useState();
  const [depart, setDepart] = useState();

  const appointmentBooked = (e) => {
    e.preventDefault();
    dispatch(
      AppointmentBooked(name, email, dob, num, sex, appointmentDate, depart)
    );
  };
  return (
    <div className="appointment">
      <Header />
      <div className="appointment_booking">
        <div className="appointment_form">
          <form method="POST" onSubmit={appointmentBooked}>
            <fieldset>
              <legend>
                <h1>Book an Appointment</h1>
              </legend>
              <table>
                <tr>
                  <td>
                    <label htmlFor="name">Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      name=""
                      id="name"
                      placeholder="Enter name..."
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="email">Email Address:</label>
                  </td>
                  <td>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email..."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="date">Date of Birth:</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      id="date"
                      placeholder="Enter date of birth..."
                      onChange={(e) => setDOB(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="number">Mobile Number:</label>
                  </td>
                  <td>
                    <input
                      type="number"
                      id="number"
                      placeholder="Enter mobile number..."
                      onChange={(e) => setNum(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="sex">Sex:</label>
                  </td>
                  <td>
                    <select id="sex" onChange={(e) => setSex(e.target.value)}>
                      <option value="0">Sex</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="child">Child</option>
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="appointmentDate">Appointment date:</label>
                  </td>
                  <td>
                    <input
                      type="date"
                      name=""
                      id="appointmentDate"
                      onChange={(e) => setappointmentDate(e.target.value)}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="depart">Department:</label>
                  </td>
                  <td>
                    <select
                      id="depart"
                      onChange={(e) => setDepart(e.target.value)}
                    >
                      <option value="0">Department</option>
                      <option value="depart1">depart1</option>
                      <option value="depart2">depart2</option>
                      <option value="depart3">depart3</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="book">Book this Appointment</button>
                  </td>
                </tr>
              </table>
            </fieldset>
          </form>
        </div>
        <Footer />
      </div>
      <Top />
    </div>
  );
};

export default Appointment;
