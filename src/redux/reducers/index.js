import { combineReducers } from "redux";
import photos from "./photos/photos";
import user from "./user/user";



export default combineReducers({
    photos,
    user,
});