import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom"
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import logo from "../img/logo-whitetext.png";
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault()

        setEmailError(false)
        setPasswordError(false)

        if (email == '') {
            setEmailError(true)
        }
        if (password == '') {
            setPasswordError(true)
        }

        if (email && password) {
            console.log(email, password)
        }
        navigate("/dashboard");
    }
    const onSignUp = () => {
        navigate("/signup");
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{ marginTop: "120px" }} maxWidth="sm">
                <CssBaseline />

                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    justifyContent="center">
                    <img src={logo}></img>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    justifyContent="center"
                >

                    <Box fontSize={30} fontWeight={600} >
                        SIGN IN
                    </Box>
                    <Box fontSize={15} fontWeight={300} >
                        Sigin into your accont
                    </Box>

                </Grid>
                <Grid style={{ paddingTop: "25px" }}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <TextField
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="email"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalPostOfficeIcon />
                                    </InputAdornment>
                                ),
                            }}
                            sx={{ mb: 3 }}
                            fullWidth
                            value={email}
                            error={emailError}
                        />
                        <TextField
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            required
                            variant="outlined"
                            color="secondary"
                            type="password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                            value={password}
                            error={passwordError}
                            fullWidth
                            sx={{ mb: 3 }}
                        />
                        <Grid item xs={1}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ backgroundColor: "#222427" }}

                                m={0}
                            >
                                SIGN IN
                            </Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid style={{ paddingTop: "25px", display: "flex", justifyContent: 'center' }} item xs={1}>
                    <small><Link to="/forgot">Forgot your password?</Link></small>
                </Grid>
                <Grid style={{ paddingTop: "25px", display: "flex", justifyContent: 'center' }} item xs={1}>
                    <small>YOU DO NOT HAVE AN ACCOUNT?</small>
                </Grid>
                <Grid item xs={1} style={{ paddingTop: "25px" }}>
                    <Button
                        onClick={onSignUp}
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: "#9b9995" }}
                        m={0}
                    >
                        SIGN UP
                    </Button>
                </Grid>

            </Container>


        </React.Fragment>
    );
}

export default Login;