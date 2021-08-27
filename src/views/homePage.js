import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import Navbar from '../components/Navbar'
import Image from '../img/polling-hero.jpeg'
import { makeStyles } from '@material-ui/core'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    height: '90vh',
  },
  root: {
    backdropFilter: 'blur(5px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Paper className={classes.paperContainer}>
        <Typography align="center" variant="h2" className={classes.root}>
          Voting App
          <Typography>Dhandhli se Paak, Shifaf Voting ka Intazam</Typography>
        </Typography>
      </Paper>
    </div>
  )
}

export default Home
