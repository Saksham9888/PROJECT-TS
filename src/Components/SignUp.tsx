import React, { useState, useContext } from 'react'
import userDataContext from '../Context/user/userDataContext'
import { Paper, Typography, Container, TextField, Button, Box, Checkbox, Divider } from '@material-ui/core'
import { makeStyles, ThemeProvider, createTheme, createStyles } from '@material-ui/core/styles'
import { Theme } from '@material-ui/core/styles'
import { deepPurple, lightBlue } from '@material-ui/core/colors'
import '@fontsource/roboto'
import { Link, useHistory, Router, BrowserRouter } from 'react-router-dom'

const theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: deepPurple[400]
        }
    }
});

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.info.main,
        padding: '40px',
    },
    paper: {
        height: '75vh',
        width: '30vw',
    },
    outterBox: {
        marginTop: '4%',
        display: 'flex',
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    box: {
        margin: '20px'
    },
    nameDiv: {
        display: 'flex',
        margin: theme.spacing(2),
    },
    nameField: {
        paddingRight: '18px',
        width: '45%'
    },
    inputField: {
        paddingRight: '18px',
        width: '100%'
    },
    btnDiv: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '15.5px',
    },
    btn: {
        color: 'white',
        width: '10vw'
    },
    upperBox1: {
        padding: '10px 25px',
    },
    box1UpperText: {
        marginTop: '10px',
        textAlign: 'left',
        fontWeight: 'bold'
    },
    box1LowerText: {
        marginTop: '3px',
        color: 'grey',
        textAlign: 'left',
    },
    divCheckBox: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '2.35px',
    },
    checkBoxText: {
        fontSize: '13px',
    },
    checkBox: {
        transform: 'scale(00.77)',
    },
    divLink: {
        marginTop: '50px',
        marginLeft: '40px'
    },
    link: {
        textDecoration: 'none',
        color: '#00b0ff',
        '&:hover': {
            color: '#007bb2',
            textDecoration: 'underline'
        },
    },
    navlink: {
        textDecoration: 'none',
        color: 'white'
    }

}))

const SignUp = () => {
    const history = useHistory();
    const [formField, setFormField] = useState({
        firstName: '', lastName: '', email: '', password: '', confirmPassword: ''
    })
    const [checkToggle, setCheckToggle] = useState(false);

    const checkBoxToogle = () => {
        setCheckToggle(!checkToggle)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value;
        const targetName = e.target.name;
        setFormField({
            ...formField,
            [targetName]: targetValue
        })
    }

    const context = useContext(userDataContext);

    const Submit = () => {

        if (formField.firstName.length <= 3 && formField.lastName.length <= 3) {
            alert("FirstName And LastName Should Be More Than 3 Characters")
            return false
        }
        if (formField.email === "") {
            alert("Email is required");
            return false
        } else {
            let rejex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
            if (rejex.test(formField.email) === false) {
                alert("Enter a valid Email");
                return false
            }
        }
        if (formField.password === "") {
            alert("Enter a password");
            return false;
        } else {
            let min = 6;
            let max = 20;
            let rejex = /^[a-zA-Z0-9]{6,20}$/;
            if (formField.password.length < min || formField.password.length > max) {
                alert("Password must be between 6 to 20 character");
                return false;
            }
            if (!rejex.test(formField.password)) {
                alert("Password should not have symbols");
                return false;
            }
        }
        if (checkToggle !== true) {
            alert('Please Agree To Terms & Conditions')
            return false
        }
        // if (formField.confirmPassword === formField.password) {
        //     return true;
        // }
        if (formField.password !== formField.confirmPassword) {
            alert('Password Miss Match!')
            return false
        }
        context.signUpData(formField)
        if (context.signUpData(formField)) {
            history.push('./signin')
        }
        // while(context.signUpData(formField)== true){
        //     history.push('./signin')
        // }

    }
    // console.log(`FirstName: ${firstName}`, `LastName: ${lastName}`, `Email: ${email}`, `Password: ${password}`, `ConfirmPassword: ${confirmPassword}`)

    const classes = useStyles();
    return (
        <div style={{ backgroundColor: 'black' }}>
                <Container className={classes.root}>
                    <ThemeProvider theme={theme}>
                        <Box className={classes.outterBox}>
                            <Paper className={classes.paper}>
                                <Box className={classes.upperBox1}>
                                    <Typography className={classes.box1UpperText} variant='h5'>Sign Up</Typography>
                                    <Typography className={classes.box1LowerText} variant='subtitle2'>Please Fill In This Form To Create An Account</Typography>
                                </Box>
                                <Divider />
                                <Box className={classes.box}>
                                    <form>
                                        <div className={classes.nameDiv}>
                                            <TextField
                                                title= 'firstName'
                                                autoComplete='off'
                                                label='First Name'
                                                className={classes.nameField}
                                                size="small"
                                                name="firstName"
                                                type="text"
                                                variant="outlined"
                                                value={formField.firstName}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                title= 'lastName'
                                                autoComplete='off'
                                                label='Last Name'
                                                className={classes.nameField}
                                                size="small"
                                                name="lastName"
                                                type="text"
                                                variant="outlined"
                                                value={formField.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>

                                        <div className={classes.nameDiv}>
                                            <TextField
                                                title= 'email'
                                                label='Email'
                                                autoComplete='off'
                                                className={classes.inputField}
                                                size="small"
                                                name="email"
                                                type="text"
                                                variant="outlined"
                                                value={formField.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={classes.nameDiv}>
                                            <TextField
                                                title= 'password'
                                                label='Password'
                                                autoComplete='off'
                                                className={classes.inputField}
                                                size="small"
                                                name="password"
                                                type="password"
                                                variant="outlined"
                                                value={formField.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={classes.nameDiv}>
                                            <TextField
                                                label='Confirm Password'
                                                autoComplete='off'
                                                className={classes.inputField}
                                                size="small"
                                                name="confirmPassword"
                                                type="password"
                                                variant="outlined"
                                                value={formField.confirmPassword}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className={classes.divCheckBox}>
                                            <Checkbox className={classes.checkBox} color='primary' onClick={checkBoxToogle} />
                                            <Typography className={classes.checkBoxText} >
                                                I accept the
                                            <Link className={classes.link} to='privacyPolicy'>
                                                    Terms of Use</Link> &
                                                 <Link className={classes.link} to='privacyPolicy'>
                                                    Privacy Policy
                                                     </Link>
                                            </Typography>
                                        </div>
                                        <div className={classes.btnDiv}>
                                            <Button variant="contained" onClick={Submit}
                                                className={classes.btn} color='primary'>
                                                Sign Up
                                        </Button>
                                        </div>
                                    </form>
                                    <div className={classes.divLink}>
                                        <Typography>Already have an account? <Link className={classes.link} to='/signin'>LogIn Here</Link></Typography>
                                    </div>
                                </Box>
                            </Paper>
                        </Box>
                    </ThemeProvider>
                </Container>
        </div>
    )
}
export default SignUp