import { getPosts } from "src/api/post";
import { POSTS_FAILURE, POSTS_LOADING, POSTS_SUCCESS } from "../types/posts";




export const loadPosts = () => {

    return async (dispatch) => {
        dispatch({type: POSTS_LOADING});

        try {
            const res = await getPosts(0, 20);

            dispatch({type: POSTS_SUCCESS, payload: res});
        } catch(err) {
            dispatch({type: POSTS_FAILURE, error: err});
            throw new Error(err);
        }
    }
}