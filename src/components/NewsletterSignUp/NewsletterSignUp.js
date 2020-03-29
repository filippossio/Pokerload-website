import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';

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
        border: '1px solid white',
        '& input': {
            height: '36px',
            border: 'none',
            backgroundColor: "#888888",
            color: "#ffffff",
            padding: '0 10px',
            float: 'left',
            width: '70%',
            '&::placeholder': {
                color: '#ffffff'
            }
        },
        "& button": {
            height: "36px",
            border: "1px solid white",
            borderRadius: "0px",
            fontSize: '12px',
            width: '100%',
        }
    },
    p: {
        margin: "0 0",
        fontSize: "15px",
        lineHeight: "19px",
        fontFamily: "Roboto",
        width: "100%",
        color: 'white',
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            // fontSize: '10px',
        },
    },
    horizontalLine: {
        borderTop: "1px solid white",
        width: "100%",
    },
    button: {
        overflow: 'hidden',
    },
    pBold: {
        fontWeight: "bold",
    },
    pBlack: {
        color: 'black',
    },
    submittedBody: {
        display: 'flex',
        alignContent: 'center',
    },
    checkIcon: {
        color: "white",
        height: '100px',
        width: '100px'
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
            <div className={classes.newsletterSignUp}>
                <form onSubmit={submitEmail}>
                    <input
                        value={email}
                        onChange={handleEmailChange}
                        type="email"
                        placeholder="ENTER YOUR EMAIL"
                        id="newsletterSignUp"
                    />
                    <div className={classes.button}>
                        <button type="submit" className={`${styles.p} ${classes.pBold} ${classes.pBlack}`}>Join</button>
                    </div>
                </form>
            </div>
            <hr className={classes.horizontalLine}></hr>
            <p className={classes.p}>By singing up, you have agreed to receive update emails regarding our services and products</p>
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
