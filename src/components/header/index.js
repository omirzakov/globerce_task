import React from "react";

//UI
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { links } from "src/links";
import { useStylesHeader } from "src/styles/header";
import { Link } from "react-router-dom";

const Header = () => {
    const styles = useStylesHeader();

    return (
        <AppBar color="inherit" className={styles.header}>
            <Toolbar className={styles.toolbar}>
                <Box component="div" className="menu-bar">
                    {
                        links.map((lItem, i) => (
                            <Button key={i} className={styles.link}>
                                <Link to={ lItem.href } className={styles.link}>{ lItem.title }</Link>
                            </Button>
                        ))
                    }
                </Box>
                <Box component="div" className="profile-bar">
                    <Button variant="contained" className={styles.profileBtn}>
                        <Link to="/profile" className={styles.profileText}>Профиль</Link>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
