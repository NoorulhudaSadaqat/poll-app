import React from 'react'
import { useSelector } from 'react-redux'
import { Grid } from '@material-ui/core'

const DisplayPoll = () => {
  const polls = useSelector((state) => state.poll.value)
  return (
    <Grid>
      {polls.map((polls) => (
        <div>
          <h1> {polls.Question}</h1>
          {polls.Options.map((Options) => (
            <h2>{Options}</h2>
          ))}
        </div>
      ))}
    </Grid>
  )
}

export default DisplayPoll
