import { getPhotos } from "src/api/photo";
import { PHOTOS_FAILURE, PHOTOS_LOADING, PHOTOS_SUCCESS } from "../types/photos"




export const loadPhotos = () => {

    return async (dispatch) => {
        dispatch({type: PHOTOS_LOADING});

        try {
            const res = await getPhotos(0, 20);

            dispatch({type: PHOTOS_SUCCESS, payload: res});
        } catch(err) {
            dispatch({type: PHOTOS_FAILURE, error: err});
            throw new Error(err);
        }
    }
}