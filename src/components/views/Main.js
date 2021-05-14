import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import './styles.css'

export default function Main() {
    return (
        <div className="home">
            <Grid className="landing-text" container>
                <Grid item>
                    <Typography color="" variant="h3">WELCOME TO MY CRAFT</Typography>
                    <Typography variant="h1">Hi, I'm Jess Graham</Typography>
                    <Typography color="secondary" variant="h1">Full Stack Web Developer</Typography>
                    <Typography variant="h2">Bachelor's of Software Engineering</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
