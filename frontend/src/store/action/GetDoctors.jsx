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

export { Get_Doctors };
