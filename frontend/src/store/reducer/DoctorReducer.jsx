const INITIAL_STATE = {
  doctors: [],
  doctor: [],
  adminInfo: [],
  appointment: [],
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

const AdminSigninReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADMIN_SIGNIN_REQUEST":
      return {
        loading: true,
      };

    case "ADMIN_SIGNIN_SUCESS":
      return {
        loading: false,
        adminInfo: action.payload,
      };

    case "ADMIN_SIGNIN_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const AppointmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "APPOINTMENT_REQUEST":
      return {
        loading: true,
      };

    case "APOINTMENT_SUCESS":
      return {
        loading: false,
        appointment: action.payload,
      };

    case "APPOINTMENT_FAIL":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export {
  GetDoctorsReducer,
  DoctorDetailsReducer,
  AdminSigninReducer,
  AppointmentReducer,
};
