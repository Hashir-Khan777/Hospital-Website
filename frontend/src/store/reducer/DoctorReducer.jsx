const INITIAL_STATE = {
  doctors: [],
  doctor: [],
};

const GetDoctorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DOCTORS_REQUEST":
      return {
        loading: true,
      };

    case "SET_DOCTORS_SUCCESS":
      return {
        loadingData: false,
        doctors: action.payload,
      };

    case "SET_DOCTORS_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const DoctorDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DOCTOR_DEAILS_REQUEST":
      return {
        loading: true,
      };

    case "DOCTOR_DETAILS_SUCCES":
      return {
        loading: false,
        doctor: action.payload,
      };

    case "DOCTOR_DETAILS_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { GetDoctorsReducer, DoctorDetailsReducer };
