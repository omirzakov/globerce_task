import { makeStyles } from "@material-ui/core";

export const useStylesLogin = makeStyles(() => ({
    wrapper: {
        width: "100%",
        maxWidth: "750px",
        margin: "150px auto 0 auto",
        padding: "20px"
    },
    inputWrapper: {
        width: "100%",
        marginBottom: "30px"
    },
    btn: {
        display:"flex",
        justifyContent:"flex-end",
        backgroundColor: "#FE7262",
        color: "#fff"
    }
}));
