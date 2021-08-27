import React from 'react'
import Display from '../components/DisplayPoll'
import { Grid } from '@material-ui/core'
import Navbar from '../components/Navbar'
import { makeStyles } from '@material-ui/core'
import Image from '../img/polling-hero.jpeg'

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: '#f5f5f5',
  },
}))

const DisplayPoll = () => {
  const classes = useStyles()
  return (
    <div className={classes.paperContainer}>
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Display />
        </Grid>
      </Grid>
    </div>
  )
}

export default DisplayPoll
