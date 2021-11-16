import { makeStyles } from "@material-ui/core";

export const useStylesHeader = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between"
    },
    header: {
        backgroundColor: "#FE7262",
        padding: "10px",
    },
    link: {
        color: "#fff",
        textDecoration: "none"
    },
    profileBtn: {
        color: "#FE7262",
        backgroundColor: "#fff"
    },
    profileText: {
        color: "#FE7262",
        textDecoration: "none"
    }
}));
