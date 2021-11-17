import { combineReducers } from "redux";
import photos from "./photos/photos";
import user from "./user/user";
import posts from "./posts/posts";



export default combineReducers({
    photos,
    user,
    posts
});