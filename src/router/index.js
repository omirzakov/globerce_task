import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import Main from "src/components/main";
import Posts from "src/components/posts";
import Profile from "src/components/profile";
import Login from "src/components/login";

const useStyles = makeStyles(() => ({
    main: {
        marginTop: 90
    }
}))


const MainRouter = () => {
    const styles = useStyles();


    return (
        <Box component={"div"} className={styles.main}>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route exact path="/profile" element={<Profile />} />
                <Route exact path="/login" element={<Login />} />
            </Routes>
        </Box>
    )
}
export default MainRouter;