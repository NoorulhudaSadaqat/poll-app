import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import DeletePoll from './helperComponents/DeletePoll'
import Vote from './helperComponents/Vote'
import { Card } from '@material-ui/core'
import { CardContent } from '@material-ui/core'

const DisplayPoll = () => {
  const polls = useSelector((state) => state.poll.pollsArray)

  return (
    <Grid container>
      {polls.map((poll, index) => (
        <Grid>
          <Card>
            <CardContent>
              <Grid item xs={12}>
                <h2> {poll.question}</h2>
                {poll.options.map((option, optionIndex) => (
                  <Grid container item xs={12}>
                    <Grid item xs={8}>
                      <h3> {option.optionDescription}</h3>
                    </Grid>
                    <Grid item xs={2}>
                      <Vote index={index} optionIndex={optionIndex}></Vote>
                    </Grid>
                    <Grid item xs={2}>
                      <Button color="secondary" size="small">
                        {option.noOfVotes}
                      </Button>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
          <Grid item xs={4}>
            <h2>
              <DeletePoll index={index}></DeletePoll>
            </h2>
          </Grid>
        </Grid>
      ))}
    </Grid>
  )
}

export default DisplayPoll
