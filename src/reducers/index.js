import fetchData from "./fetchData";
import deleteItem from "./deleteItem";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  fetchData: fetchData,
  deleteItem: deleteItem,
});

export default allReducers;