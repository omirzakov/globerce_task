import { makeStyles } from "@material-ui/core";

export const useStylesHeader = makeStyles(() => ({
    toolbar: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    menuBar: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
    },
    logo: {
        width: 150,
        height: 40
    },
    header: {
        backgroundColor: "#fff",
        padding: "10px",
    },
    link: {
        color: "#000",
        marginLeft: 20,
        fontSize: 18,
        textDecoration: "none"
    },
    profileBtn: {
        color: "#000",
        backgroundColor: "#fff"
    },
    profileText: {
        color: "#000",
        textDecoration: "none"
    }
}));
