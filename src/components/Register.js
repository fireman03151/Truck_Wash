import React, { useState } from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import logo from "../img/logo-whitetext.png";
const RegisterForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
    const [conpassword, setconPassword] = useState('')
    const [age, setAge] = React.useState('');
    function handleSubmit(event) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password)
    }
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={{ marginTop: "50px" }} maxWidth="sm">
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    justifyContent="center">
                    <img src={logo}></img>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    justifyContent="center"
                >

                    <Box fontSize={30} fontWeight={600} >
                        SIGN UP
                    </Box>

                </Grid>
                <Grid style={{ paddingTop: "50px" }}>
                    <form onSubmit={handleSubmit} action={<Link to="/" />}>
                        <Stack spacing={2} justifyContent="center"
                            alignItems="center" direction="row" sx={{ marginBottom: 4 }}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="First Name"
                                onChange={e => setFirstName(e.target.value)}
                                value={firstName}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                required
                            />
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="Last Name"
                                onChange={e => setLastName(e.target.value)}
                                value={lastName}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircleIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                                required
                            />
                        </Stack>
                        <TextField
                            type="email"
                            variant='outlined'
                            color='secondary'
                            label="Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <MailIcon />
                                    </InputAdornment>
                                ),
                            }}

                            required
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="password"
                            variant='outlined'
                            color='secondary'
                            label="Password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                            required
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="password"
                            variant='outlined'
                            color='secondary'
                            label="ConfirmPassword"
                            onChange={e => setconPassword(e.target.value)}
                            value={password}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                            required
                            fullWidth
                            sx={{ mb: 4 }}
                        />
                        <TextField
                            type="date"
                            variant='outlined'
                            color='secondary'
                            label="Date of Birth"
                            onChange={e => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EditCalendarIcon />
                                    </InputAdornment>
                                ),
                            }}
                            required
                            sx={{ mb: 4 }}
                        />
                        <Button type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: "#222427" }}
                            m={0}  >
                            SIGN UP
                        </Button>
                    </form>
                </Grid>
                <Grid style={{ paddingTop: "25px", display: "flex", justifyContent: 'center' }} item xs={1}>
                    <small>Already have an account? <Link to="/">Login Here</Link></small>
                </Grid>
            </Container>




        </React.Fragment>
    )
}


export default RegisterForm;