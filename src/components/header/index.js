import React from "react";

//UI
import { AppBar, Box, Button, Link, Toolbar } from "@material-ui/core";
import { links } from "src/links";
import { useStylesHeader } from "src/styles/header";
import { NavLink } from "react-router-dom";

const Header = () => {
    const styles = useStylesHeader();

    return (
        <AppBar color="inherit" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <Box component="div" className={styles.menuBar}>
                    <NavLink to="/">
                        <Box component="img" src={"/assets/logo.svg"} alt="Logo" className={styles.logo} />
                    </NavLink>
                    {
                        links.map((lItem, i) => (
                            <NavLink to={ lItem.href } className={styles.link} key={i}>
                                { lItem.title }
                            </NavLink>
                        ))
                    }
                </Box>
                <Box component="div" className="profile-bar">
                    <NavLink to="/profile" className={styles.profileText}>
                        Профиль
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
