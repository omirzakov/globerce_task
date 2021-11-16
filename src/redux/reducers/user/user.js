const isAuth = JSON.parse(localStorage.getItem("isAuth"));

const initialState = {
  isLogin: isAuth ? true : false,
  loading: true,
  data: {},
  user: isAuth ? "admin" : "",
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case "USER_LOADING":
      return state;
    case "USER_SUCCESS":
      return { ...state, loading: false };
    case "USER_DATA":
      return { ...state, loading: false, data: action.payload };
    default:
      return state;
  }
}
