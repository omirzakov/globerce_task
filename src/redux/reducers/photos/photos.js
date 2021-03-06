import { PHOTOS_FAILURE, PHOTOS_LOADING, PHOTOS_SUCCESS } from "src/redux/types/photos";

const initialState = {
    loading: false,
    data: []
};

export default function photos(state = initialState, action) {
    switch (action.type) {
        case PHOTOS_LOADING:
            return { ...state, loading: true };
        case PHOTOS_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case PHOTOS_FAILURE:
            return { ...state, loading: false, error: action.error }
        default:
            return state;
    }
}
