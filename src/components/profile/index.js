import React, { useEffect } from "react";

// UI
import { Avatar, Box, Button, List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout, getUserInfo } from "src/redux/actions/user";
import { useStylesProfile } from "src/styles/profile";
import { Skeleton } from "@material-ui/lab";

// Data
import { user, company, address } from "./data";

const Profile = ({ userInfo, loadUserData, logOut }) => {
    const { data, loading } = userInfo;
    const styles = useStylesProfile();


    console.log(data)
    useEffect(() => {
        loadUserData();
    }, []);

    const handleLogout = () => {
        logOut();
    }


    if (!userInfo.isLogin) {
        return <Navigate to="/login" />
    }

    return (
        <Box component="div" className={styles.wrapper}>
            {
                loading ? <Skeleton variant="rect" width="100%" height="100vh" /> :
                    <Paper className={styles.papper}>
                        <Box className={styles.profileHeader}>
                            <Box component="div" display="flex" alignItems="center" height="100%">
                                <Avatar>H</Avatar>
                                <Typography variant="h6" className={styles.spacing}>{data.name}</Typography>
                            </Box>
                            <Button onClick={handleLogout} className={styles.logoutBtn} variant="contained" color="primary">Выйти</Button>
                        </Box>
                        <Typography variant="h5" className={styles.sectionHeading}>Информация о себе</Typography>
                        <List>
                            {
                                user.map((info, i) => (
                                    <ListItem className={styles.listItem}>
                                        <ListItemText>
                                            { info.title } : { data[info.key] }
                                        </ListItemText>

                                    </ListItem>
                                ))
                            }
                        </List>
                        <Typography variant="h5" className={styles.sectionHeading}>Адрес</Typography>
                        {
                                address.map((info, i) => (
                                    <ListItem className={styles.listItem}>
                                        <ListItemText>
                                            { info.title } : { data.address[info.key] }
                                        </ListItemText>
                                    </ListItem>
                                ))
                        }
                        <Typography variant="h5" className={styles.sectionHeading}>Компания</Typography>
                        {
                                company.map((info, i) => (
                                    <ListItem className={styles.listItem}>
                                        <ListItemText>
                                            { info.title } : { data.company[info.key] }
                                        </ListItemText>

                                    </ListItem>
                                ))
                        }
                    </Paper>
            }
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