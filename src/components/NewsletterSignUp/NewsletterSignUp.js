import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import { TextField, Button } from '@material-ui/core';

const styles = theme => ({
    heading: {
        fontSize: "25px",
        lineHeight: "30px",
        color: "white",
        marginBottom: "10px",
        fontFamily: "Roboto",
        fontWeight: "bold",
        display: 'block',
        marginBlockStart: '0.83em',
        marginBlockEnd: '0.83em',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
        },
    },
    newsletterSignUp: {
        display: 'flex',
        '& form': {
            width: '100%'
        }
    },
    horizontalLine: {
        borderTop: "1px solid white",
        width: "100%",
    },
    submittedBody: {
        display: 'flex',
        alignContent: 'center',
    },
    checkIcon: {
        color: "white",
        height: '100px',
        width: '100px'
    },
    cssLabel: {
        color: 'white'
    },
    emailTxtField: {
        width: '100%',
        '&:focus': {
            color: 'green',
        },
    },
    subscribeBtn: {
        color: 'white',
        float: 'right'
    },
    p: {
        margin: "0 0",
        fontSize: "15px",
        lineHeight: "19px",
        fontFamily: "Roboto",
        width: "100%",
        color: 'white',
        textDecoration: 'none',
        paddingBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '10px',
        },
    }
});

const NewsletterSignUp = (props) => {
    const { classes } = props;
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    var submitEmail = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    var handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    var submittedBody = (
        <div className={classes.submittedBody}>
            <CheckIcon className={classes.checkIcon} />
        </div>
    )
    var body = (
        <>
            <p className={classes.p}>By singing up, you have agreed to receive update emails regarding our services and products</p>
            <div className={classes.newsletterSignUp}>
                <form onSubmit={submitEmail}>
                    <TextField
                        value={email}
                        onChange={handleEmailChange}
                        type="email"
                        label="ENTER YOUR EMAIL"
                        id="newsletterSignUp"
                        variant="filled"
                        className={classes.emailTxtField}
                        InputProps={{
                            classes: {
                                root: classes.cssLabel, //Active Text
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: "white", //Placeholder
                            }
                        }}
                    />
                    <Button type="submit" color="primary" className={classes.subscribeBtn}>
                        Subscribe
                    </Button>
                </form>
            </div>
        </>
    )

    return (
        <>
            <label htmlFor="newsletterSignUp" className={classes.heading}>{submitted ? 'SUBSCRIBED' : 'SIGN UP'}</label>
            {submitted ? submittedBody : body}
        </>
    );
}

export default withStyles(styles)(NewsletterSignUp);
