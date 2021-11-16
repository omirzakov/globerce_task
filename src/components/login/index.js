import React, { useState } from "react";


import { Button, FormControl, Paper, TextField } from "@material-ui/core";
import { useStylesLogin } from "src/styles/login";
import { connect } from "react-redux";
import { initLogin } from "src/redux/actions/user";


const Login = ({initLogin, userInfo}) => {
    const [user, setUser] = useState({name: "", password: ""})
    const styles = useStylesLogin();

    const handleChangeUser = ({ target }) => {
        const { value, name } = target;

        setUser({...user, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(initLogin(user)) {
            return window.location.replace("/profile");
        }
    }

    return (
        <Paper className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
                <FormControl className={styles.inputWrapper}>
                    <TextField  placeholder="Логин" name="name" value={user.name} onChange={handleChangeUser} />
                </FormControl>
                <FormControl className={styles.inputWrapper}>
                    <TextField type="password"  placeholder="Пароль" name="password" value={user.password} onChange={handleChangeUser} />
                </FormControl>
                <FormControl className={styles.btn}>
                    <Button type="submit" variant="contained" color="primary">Войти</Button>
                </FormControl>
            </form>
        </Paper>    
    )
}

const mapStateToProps = (states) => {

    return {
        userInfo: states.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLogin: user => dispatch(initLogin(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);