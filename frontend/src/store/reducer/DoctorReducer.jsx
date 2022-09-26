const INITIAL_STATE = {
  doctors: [
    {
      _id: "1",
      name: "Doctor 1",
      image: "/images/zaid.jpg",
    },
    {
      _id: "2",
      name: "Doctor 2",
      image: "/images/farhan.jpg",
    },
  ],
  doctor: {
    _id: "1",
    name: "Doctor 1",
    image: "/images/zaid.jpg",
    experience: 5,
    services: "service 1, service 2",
    condition: "condition 1, condition 2",
    education: "education 1, education 2",
    about: "about the doctor",
    wait: 2,
    mondaysaturday: "11am",
    sunday: "off",
    fees: 300,
  },
  adminInfo: [],
  appointment: [],
  messages: [],
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

const MessageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MESSAGE_SEND_REQUEST":
      return {
        loading: true,
      };

    case "MESSAGE_SEND_SUCCESS":
      return {
        loading: false,
        messages: action.payload,
      };

    case "MESSAGE_SEND_FAIL":
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
  MessageReducer,
};
