import React, { useState, useContext } from 'react';
import userDataContext from '../Context/user/userDataContext'
import '@fontsource/roboto'
// import { Theme } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom';
import { Toolbar, Box, Typography, Paper, AppBar, TextField, TextareaAutosize, Divider, Button, Grid } from '@material-ui/core'
import { makeStyles, ThemeProvider, createTheme, createStyles } from '@material-ui/core/styles'
import { lightBlue } from '@material-ui/core/colors'

const theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[500],
        },
        secondary: {
            main: '#483D8B'
        }
    }
});

const useStyles = makeStyles((theme) => createStyles({
    outterGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr'
    },
    box1: {
        height: '40%',
        width: '35vh',
        margin: '90px 30px 20px',
        borderRadius: '5px',
        borderColor: '#483D8B',
        border: '1px solid',
        position: 'relative',
        // display: 'flex'
    },
    // paperAddNotes: {
    //     height: '40%',
    //     width: '100%'
    // },
    // addNotes:{
    // },
    box2: {
        height: '50%',
        width: '17%',
        margin: '65px 30px 20px',
        borderRadius: '5px',
        borderColor: '#483D8B',
        border: '1px solid',
        // position: 'relative',
        // display: 'flex'
    },
    // div: {
    //     // display: 'block',
    //     width: 'auto'
    // },
    addNotesBox: {
        marginLeft: '30%',
    },
    boxHeading: {
        height: '30px',
        backgroundColor: '#483D8B',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'end'
    },
    textFieldBox: {
        margin: '20px 15px 40px',
        position: 'relative'
    },
    detailBox: {
        margin: '20px 15px 1px',
        position: 'relative'
    },
    heading: {
        fontWeight: 'bold'
    },
    btn: {
        display: 'fixed',
        margin: '4px 7px',
        position: 'relative',
    },
    divider: {
        backgroundColor: '#512DA8',
    },
    textArea: {
        maxWidth: '96.5%'
    },
    btnColor: {
        backgroundColor: '#795548',
        color: '#FFF',
        '&:hover': {
            color: '#FFF',
            backgroundColor: '#5D4037'
        }
    }
}))



const DashBoard = () => {
    const [userNotes, setUserNotes] = useState({
        title: '', text: ''
    })

    const classes = useStyles();
    const history = useHistory();
    const notesContext = useContext(userDataContext)
    const userEmail = localStorage.getItem('SignInEmail');

    const onSave = (e: any) => {
        notesContext.userNotesData(userNotes, userEmail);
        e.preventDefault();
        setUserNotes({ title: '', text: '' })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value;
        const targetName = e.target.name;
        setUserNotes({
            ...userNotes, [targetName]: targetValue
        })
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const targetValue = e.target.value;
        const targetName = e.target.name;
        setUserNotes({
            ...userNotes,
            [targetName]: targetValue
        })
    }
    const logOut = () => {
        history.push('./signin')
    }
    return (
        <div>
            <ThemeProvider theme={theme}>
                <AppBar color='secondary'>
                    <Toolbar>
                        <Typography variant='h5'>
                            Notes
                    </Typography>
                        <Box pl={140}><Button onClick={logOut} color='inherit'>LogOut</Button></Box>
                    </Toolbar>
                </AppBar>
                <div>
                    <div className= {classes.outterGrid}>
                        <div className={classes.box1}>
                            <Paper>
                                <Box className={classes.boxHeading}>
                                    <Typography variant='body2'>Add Note</Typography>
                                </Box>
                                <Box className={classes.textFieldBox}>
                                    <Typography className={classes.heading} variant='subtitle2'>Title</Typography>
                                    <TextField
                                        color='secondary'
                                        name='title'
                                        onChange={handleChange}
                                        size='small'
                                        value={userNotes.title}
                                        fullWidth variant='outlined' />

                                    <Typography className={classes.heading} variant='subtitle2'>Text</Typography>
                                    <TextareaAutosize
                                        name='text'
                                        className={classes.textArea}
                                        onChange={handleChangeText}
                                        value={userNotes.text}
                                        minRows={6} />
                                </Box>
                                <Divider className={classes.divider} />
                                <Box className={classes.btn}>
                                    <Button className={classes.btnColor}
                                        size='small'
                                        variant='contained'
                                        fullWidth
                                        onClick={onSave}
                                    >Add</Button>
                                </Box>
                            </Paper>
                        </div>
                    </div>
                    <Grid className={classes.box2}>
                        <Paper>
                            <Box className={classes.boxHeading}>
                                <Typography variant='body2'>Status</Typography>
                            </Box>
                            <Box className={classes.detailBox}>
                                <Typography className={classes.heading} variant='subtitle2'>Total Notes: </Typography>
                            </Box>
                            <Box className={classes.detailBox}>
                                <Typography className={classes.heading} variant='subtitle2'>Last Update: </Typography>
                            </Box>
                        </Paper>
                    </Grid>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default DashBoard;