import axios from "axios";

export const getPosts = async (start, end) => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts?_start=${start}&_limit=${end}`);

        return res.data;
    } catch(err) {
        throw new Error(err);
    }
}