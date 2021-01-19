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

export { Get_Doctors, Doctor_Details };
