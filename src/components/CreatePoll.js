import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPoll } from '../store/PollSlice'
import { makeStyles } from '@material-ui/styles'
import { FormControl } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import AddOption from './helperComponents/AddOption'
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { setQuestion } from '../store/questionSlice'
import { updateOptions, resetOptions } from '../store/optionsSlice'
import { updateStatus } from '../store/statusSlice'
import { setOption } from '../store/optionSlice'
import { setOptions } from '../store/optionsSlice'

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px white',
    padding: '0px 0px 4px 0px',
    minWidth: 370,
  },
  cardRoot: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px white',
    padding: '0px 0px 4px 0px',
    minWidth: 370,
    margin: '30px 0px 0px 0px',
  },
})

const CreatePoll = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  let history = useHistory()

  //to handle the form in create poll
  const question = useSelector((state) => state.question.question)
  const status = useSelector((state) => state.status.status)
  const options = useSelector((state) => state.options.options)
  const option = useSelector((state) => state.option.option)

  //For sending data to store after poll is created
  function sendData() {
    dispatch(
      addPoll({
        question: question,
        options: options,
        status: status,
      }),
    )
    history.replace('/view-poll')
  }
  //to reset Data
  function resetData() {
    dispatch(setQuestion(''))
    dispatch(setOption(''))
    dispatch(resetOptions())
  }

  //to reset data after every rerendering
  // useEffect(() => {
  //   console.log(' Component Rerendered ')
  //   resetData()
  // })

  //to render all the options
  function updateNoOfOptions(value) {
    let optionsObject = {
      optionDescription: value,
      noOfVotes: 0,
    }
    console.log(optionsObject)
    dispatch(setOptions(optionsObject))
    dispatch(setOption(''))
  }

  //to check if the poll requirements are fulfilled before submitting form
  const checkValidation = () => {
    return !(question && options.length >= 2)
  }

  return (
    <div>
      <Card variant="outlined" className={classes.cardRoot}>
        <CardContent>
          <form>
            <FormControl component="fieldset">
              <TextField
                id="outlined-basic"
                className={classes.root}
                label="Question"
                value={question}
                required
                variant="outlined"
                onChange={(e) => dispatch(setQuestion(e.target.value))}
              />
              <TextField
                id="outlined-basic"
                className={classes.root}
                required
                label="Option"
                value={option}
                variant="outlined"
                onChange={(e) => dispatch(setOption(e.target.value))}
              />
              <AddOption
                option={option}
                updateNoOfOptions={updateNoOfOptions}
              ></AddOption>

              <RadioGroup
                aria-label="poll-status"
                name="poll-status"
                value={status}
                required
                onChange={(e) => dispatch(updateStatus(e.target.value))}
              >
                <FormControlLabel
                  value="active"
                  control={<Radio />}
                  label="Active"
                />
                <FormControlLabel
                  value="inactive"
                  control={<Radio />}
                  label="In-Active"
                />
              </RadioGroup>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                onClick={sendData}
                disabled={checkValidation()}
              >
                Publish Poll
              </Button>
              <Button
                type="button"
                variant="contained"
                color="primary"
                size="small"
                onClick={resetData}
              >
                Reset
              </Button>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreatePoll
