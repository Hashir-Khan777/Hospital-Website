import Axios from "axios";

const Get_Doctors = () => async (dispatch) => {
  dispatch({ type: "SET_DOCTORS_REQUEST" });
  try {
    const { data } = await Axios.get("/api/doctors");
    dispatch({ type: "SET_DOCTORS_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "SET_DOCTORS_FAIL", payload: err.message });
  }
};

const Doctor_Details = (productId) => async (dispatch) => {
  dispatch({ type: "DOCTOR_DEAILS_REQUEST", payload: productId });
  try {
    const { data } = await Axios.get(`/api/doctors/${productId}`);
    dispatch({ type: "DOCTOR_DETAILS_SUCCES", payload: data });
  } catch (err) {
    dispatch({
      type: "DOCTOR_DETAILS_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const Admin = (email, password) => async (dispatch) => {
  dispatch({ type: "ADMIN_SIGNIN_REQUEST", payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/doctors/admin", {
      email,
      password,
    });
    dispatch({ type: "ADMIN_SIGNIN_SUCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "ADMIN_SIGNIN_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

const AppointmentBooked = (
  name,
  email,
  dob,
  num,
  sex,
  appointmentdate,
  depart
) => async (dispatch) => {
  dispatch({
    type: "APPOINTMENT_REQUEST",
    payload: { name, email, dob, num, sex, appointmentdate, depart },
  });
  try {
    const { data } = await Axios.post("/api/appointment", {
      name,
      email,
      dob,
      num,
      sex,
      appointmentdate,
      depart,
    });
    dispatch({ type: "APOINTMENT_SUCESS", payload: data });
  } catch (err) {
    dispatch({
      type: "APPOINTMENT_FAIL",
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export { Get_Doctors, Doctor_Details, Admin, AppointmentBooked };
