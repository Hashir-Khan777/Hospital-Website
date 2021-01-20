import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Admin } from "../store/action/GetDoctors";
import "../css/admin.css";

const AdminLogin = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const redirect = "/ziadentalcare/dashboard";

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(Admin(email, password));
  };

  const adminReducer = useSelector((state) => state.adminReducer);
  const { error, adminInfo } = adminReducer;

  useEffect(() => {
    if (adminInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, adminInfo]);

  return (
    <div className="admin_login">
      <div className="page_for_form">
        <form method="POST" onSubmit={submitHandler}>
          <fieldset>
            <legend>
              <h1>ADMIN FORM</h1>
              {error ? <span className="error_admin">{error}</span> : null}
            </legend>
            <table>
              <tr>
                <td>
                  <label className="landing_lablels" htmlFor="email">
                    <h3>Email Address: </h3>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="landing_input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="landing_lablels" htmlFor="password">
                    <h3>Password: </h3>
                  </label>
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="landing_input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="landing_submit" type="submit">
                    Submit
                  </button>
                </td>
              </tr>
            </table>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
