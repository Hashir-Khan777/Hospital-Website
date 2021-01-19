const INITIAL_STATE = {
  doctors: [],
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

export { GetDoctorsReducer };
