import { POSTS_FAILURE, POSTS_LOADING, POSTS_SUCCESS } from "src/redux/types/posts";

const initialState = {
    loading: false,
    data: []
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case POSTS_LOADING:
            return { ...state, loading: true };
        case POSTS_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case POSTS_FAILURE:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}
