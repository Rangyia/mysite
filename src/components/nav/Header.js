import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Grid, Typography, useScrollTrigger, Fab, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Squash as Hamburger } from 'hamburger-react'
import './styles.css'

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
}));

function ScrollTop(props) {
    const { children } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const useHeaderStyles = makeStyles((theme) => ({
    root: {
        justifyContent: 'space-around',
        margin: 0,
    },
    grow: {
        flexGrow: 1
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));


export default function Header(props) {
    const classes = useHeaderStyles();
     
    return (
        <React.Fragment>
            <AppBar className="header" style={{backgroundColor: 'transparent'}}>
                <Toolbar className={classes.root}>
                    <Typography color="primary" variant="h6">JESS GRAHAM</Typography>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <Typography className="half-highlight" color="primary" variant="h6">Projects</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="half-highlight" color="primary" variant="h6">Experience</Typography>
                            </Grid>
                            <Grid item>
                                <Typography className="half-highlight" color="primary" variant="h6">Contact</Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.sectionMobile}>
                        <Hamburger distance="sm" easing="ease-in" color={"#1a1a1a"} />
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab color="secondary" size="large" aria-label="scroll back to top">
                    <ArrowUpwardIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}