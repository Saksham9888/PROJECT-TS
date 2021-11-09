import { Box, Typography, Paper, Divider, Button } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => createStyles({
    box1: {
        height: '40%',
        width: '35vh',
        margin: '90px 30px 20px',
        position: 'relative',
        // display: 'flex'
    },
    border: {
        maxWidth: '30vh',
        border: '1px solid',
        borderRadius: '5px',
        borderColor: '#483D8B',
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
        position: 'relative',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    },
    heading: {
        fontWeight: 'bold',
        maxwidth: '30vh',
        position: 'relative',
    },
    divider: {
        backgroundColor: '#512DA8',
    },
    btn: {
        display: 'fixed',
        margin: '4px 7px',
        position: 'relative',
    },
    redBtn: {
        backgroundColor: '#B22222',
        color: '#FFF',
        '&:hover': {
            color: '#FFF',
            backgroundColor: '#8B0000'
        }
    },
}))
const AddNotes = (props: { title: any, id: any, text: any, deleteNote:(id: any)=> void }) => {

    const classes = useStyles();
    return (
        <div className={classes.box1}>
            <Paper className={classes.border}>
                <Box className={classes.boxHeading}>
                    <Typography variant='body2'>{props.title}</Typography>
                </Box>
                <Box className={classes.textFieldBox}>
                    {/* <Typography className={classes.heading} variant='subtitle2'>
                            Title: {props.title}
                        </Typography> */}
                    <Typography variant='subtitle2'>
                        <div>
                            {props.text}
                        </div>
                    </Typography>
                </Box>
                <Divider className={classes.divider} />
                <Box className={classes.btn}>
                    <Button
                        className={classes.redBtn}
                        size='small'
                        variant='contained'
                        fullWidth
                        onClick={() => {props.deleteNote(props.id)}}
                    >Delete</Button>
                </Box>
            </Paper>
        </div>
    )
}

export default AddNotes
