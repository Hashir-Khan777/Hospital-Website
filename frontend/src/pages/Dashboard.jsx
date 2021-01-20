import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Get_Doctors } from "../store/action/GetDoctors";
import Loadingbox from "../components/Loadingbox";
import Messagebox from "../components/Messagebox";
import "../css/dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const doctorsList = useSelector((state) => state.doctorsList);
  const { loading, error, doctors } = doctorsList;

  useEffect(() => {
    dispatch(Get_Doctors());
  }, [dispatch]);
  return (
    <div className="dashboard">
      <div className="doctors">
        <div className="header_dashboard">
          <ul className="header_list">
            <li className="header_item">Appointments</li>
            <li className="header_item">Messages</li>
          </ul>
        </div>

        <div className="admin_content">
          <div className="sidebar">
            <aside>
              <ul className="create_list">
                <li className="crete_item">
                  <p>add admin</p>
                </li>
              </ul>
            </aside>
          </div>

          <div className="docrors_comtent">
            <h1>Doctors</h1>
            <div className="created_doctors">
              <ul className="doctor_list">
                {loading ? (
                  <Loadingbox />
                ) : error ? (
                  <Messagebox>{error}</Messagebox>
                ) : (
                  doctors.map((doctor) => {
                    return (
                      <li className="doctor_item">
                        <p>{doctor._id}</p>
                        <button className="doctor_button delete_doctor">
                          Delete
                        </button>
                        <button className="doctor_button update_doctor">
                          Update
                        </button>
                      </li>
                    );
                  })
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
