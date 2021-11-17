import { makeStyles } from "@material-ui/core";

export const useStylesProfile = makeStyles(() => ({
    wrapper: {
        maxWidth: "950px",
        minHeight: "100vh",
        padding: "30px",
        margin: "0 auto"
    },
    papper: {
        minHeight: "80vh",
        padding: "20px"
    },
    logoutBtn: {
        height: "100%"
    },
    spacing: {
        marginLeft: 10
    },
    profileHeader: {
        display: "flex",
        justifyContent: "space-between",
    },
    listItem: {
        borderBottom: "1px solid #eee",
        padding: "5px 0 5px 0"
    },
    sectionHeading: {
        margin: "20px 0 10px 0"
    }
}));
