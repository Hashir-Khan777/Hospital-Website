import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import {
  DoctorDetailsReducer,
  GetDoctorsReducer,
} from "./reducer/DoctorReducer";

const reducer = combineReducers({
  doctorsList: GetDoctorsReducer,
  doctorDetails: DoctorDetailsReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default Store;
