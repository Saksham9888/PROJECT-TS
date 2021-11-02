import React, { useState, useContext } from 'react'
import userDataContext from '../Context/user/userDataContext'
import { Paper, Typography, Container, TextField, Button, Box, Divider } from '@material-ui/core'
import { makeStyles, ThemeProvider, createTheme, createStyles } from '@material-ui/core/styles'
// import { Theme } from '@material-ui/core/styles'
import { deepPurple, lightBlue } from '@material-ui/core/colors'
import { useHistory, NavLink } from 'react-router-dom'
import '@fontsource/roboto'

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

const useStyles = makeStyles((theme) => createStyles({
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
        margin: '20px',
        marginTop: '55px'
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
        width: '10vw',
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
        marginTop: '100px',
        marginLeft: '30px'
    },
    link: {
        textDecoration: 'none',
        color: '#00b0ff',
        '&:hover': {
            color: '#007bb2',
            textDecoration: 'underline'
        },
    },
    form: {
        margiin: '30px'
    },
    navlink: {
        textDecoration: 'none',
        color: 'white'
    }

}))

const SignUp = () => {
    const classes = useStyles();
    const contextField = useContext(userDataContext)
    const history = useHistory();

    const [formField, setFormField] = useState<any>({
        email: '', password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value;
        const targetName = e.target.name;
        setFormField({
            ...formField,
            [targetName]: targetValue
        })
    }
    // const userEmail = contextField.userData.user.email
    // const userPassword = contextField.userData.users.password
    // console.log(userEmail, userPassword)

    const onSubmit = () => {
        if(contextField.signInData(formField.email, formField.password)){
            history.push('./dashboard')
        }
    }

    return (
        <div style={{ backgroundColor: 'black' }}>
            <Container className={classes.root}>
                <ThemeProvider theme={theme}>
                    <Box className={classes.outterBox}>
                        <Paper className={classes.paper}>
                            <Box className={classes.upperBox1}>
                                <Typography className={classes.box1UpperText} variant='h5'>Sign In</Typography>
                                <Typography className={classes.box1LowerText} variant='subtitle2'>Please Enter Your User Details To LogIn</Typography>
                            </Box>
                            <Divider />
                            <Box className={classes.box}>
                                <form>
                                    <div className={classes.nameDiv}>
                                        <TextField
                                            label='Email'
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
                                            label='Password'
                                            className={classes.inputField}
                                            size="small"
                                            name="password"
                                            type="password"
                                            variant="outlined"
                                            value={formField.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className={classes.btnDiv}>
                                        <Button variant="contained" className={classes.btn} color='primary' onClick={onSubmit}>Sign In</Button>
                                    </div>
                                </form>
                                <div className={classes.divLink}>
                                    <Typography>
                                        Create new account here. <NavLink className={classes.link} to='/'>Create Account</NavLink>
                                    </Typography>
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

