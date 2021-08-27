import React from 'react'
import CreatePoll from '../components/CreatePoll'
import { Grid } from '@material-ui/core'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '30px 30px 30px 30px',
  },
}))

const CreatePollView = () => {
  const classes = useStyles()

  const question = useSelector((state) => state.question.question)
  const status = useSelector((state) => state.status.status)
  const options = useSelector((state) => state.options.options)
  console.log('options :' + options)
  const option = useSelector((state) => state.option.option)

  return (
    <div>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
          <CreatePoll />
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container item xs={6}>
          <Card className={classes.root}>
            <CardContent>
              <Grid item xs={12}>
                <h2>Statement : {question}</h2>
                <h3>Options :</h3>
                {options.map((option, optionIndex) => (
                  <div>
                    <Grid container item xs={12}>
                      <Grid item xs={10}>
                        <h5>
                          {optionIndex + 1} :{option.optionDescription}
                        </h5>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreatePollView
