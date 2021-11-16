import React, { useEffect } from "react";

import { Avatar, Box, Button, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout, getUserInfo } from "src/redux/actions/user";
import { useStylesProfile } from "src/styles/profile";

const Profile = ({userInfo, loadUserData, logOut}) => {
    const { data, loading } = userInfo;
    const styles = useStylesProfile();

    console.log(userInfo)

    useEffect(() => {
        loadUserData();
    }, []);
    
    const handleLogout = () => {
        logOut();
    }


    if(!userInfo.isLogin) {
        return <Navigate to="/login" />
    }

    return (
        <Box component="div" className={styles.wrapper}>
            <Paper className={styles.papper}>
                <Avatar>H</Avatar>
                <Button onClick={handleLogout} className={styles.logoutBtn}>Выйти</Button>
            </Paper>
        </Box>
    )
}

const mapStateToProps = (states) => {

    return {
        userInfo: states.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserData: () => dispatch(getUserInfo()),
        logOut: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);