import React, { useState } from 'react';
import { withStyles, useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import NewsletterSignUp from '../../../components/NewsletterSignUp/NewsletterSignUp'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
    signUpBtn: {
        width: '200px',
        height: '50px',
        marginTop: '20px',
        borderRadius: '50px',
        backgroundColor: '#606060',
        borderColor: '#606060',
        color: 'white',
        fontSize: '27px',
        '&:hover': {
            backgroundColor: 'black',
            borderColor: '#606060',
            cursor: 'pointer',
        },
        '&:focus': {
            outline: '0',
        },
        '&:active': {
            transform: 'translateY(4px)',
        }
    },
    modalContainer: {
        backgroundColor: "#606060",
        height: '250px',
        width: '500px'
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const SignUpModal = (props) => {
    const { classes } = props;
    const [open, setOpen] = useState(false);

    // Media Query
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className={classes.signUpBtn} onClick={handleClickOpen}>SIGN UP</button>
            <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
                {handleClose ? (
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                ) : null}
                <Container className={classes.modalContainer}>
                    <NewsletterSignUp />
                </Container>
            </Dialog>
        </div>
    );
};

export default withStyles(styles)(SignUpModal);