import axios from "axios";

export const getPhotos = async (start, end) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/photos?_start=${start}&_limit=${end}`);

        return res.data;
    } catch(err) {
        throw new Error(err);
    }
}