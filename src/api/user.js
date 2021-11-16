import axios from "axios";

export const getUserData = async () => {

    try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/1`);

        return res.data;
    } catch(err) {
        throw new Error(err);
    }
}