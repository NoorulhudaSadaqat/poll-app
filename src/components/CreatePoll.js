import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPoll } from '../store/PollSlice'
import { makeStyles } from '@material-ui/styles'
import { FormControl, ListItemText } from '@material-ui/core'
import { RadioGroup } from '@material-ui/core'
import { Radio } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import AddOption from './helperComponents/AddOption'

const useStyles = makeStyles({
  root: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px white',
    padding: '0px 0px 4px 0px',
  },
})

const CreatePoll = () => {
  const pollId = useSelector((state) => state.poll.id)
  const dispatch = useDispatch()

  const classes = useStyles()

  const [question, setQuestion] = useState(' ')
  const [options, updateOptions] = useState([])
  const [status, updateStatus] = useState('inactive')
  const [noOfOptions, setNoOfOptions] = useState(2)

  //For sending data to store after poll is created
  function sendData() {
    console.log('Question : ' + question)
    console.log('Options : ' + options)
    console.log('Status : ' + status)
  }

  //to render all the options
  let inputs = []

  //to update number of options
  function updateNoOfOptions(value) {
    setNoOfOptions(value)

    //to render all the options
    for (let i = 0; i < noOfOptions; i++) {
      inputs.push(
        <TextField
          id="outlined-basic"
          className={classes.root}
          label="Option"
          variant="outlined"
          onChange={(e) => updateOptions([...options, e.target.value])}
        />,
      )
      console.log(inputs)
    }
  }
  return (
    <div>
      <form className={classes.root}>
        <FormControl component="fieldset">
          <TextField
            id="outlined-basic"
            className={classes.root}
            label="Question"
            required
            variant="outlined"
            onKeyUp={(e) => {
              setQuestion(e.target.value)
            }}
          />
          <TextField
            id="outlined-basic"
            className={classes.root}
            required
            label="Option"
            variant="outlined"
            onChange={(e) => updateOptions([...options, e.target.value])}
          />
          ,{options.map((options) => ({ options }))}
          <AddOption
            noOfOptions={noOfOptions}
            updateNoOfOptions={updateNoOfOptions}
          />
          <RadioGroup
            aria-label="poll-status"
            name="poll-status"
            value={status}
            required
            onChange={(e) => updateStatus(e.target.value)}
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
            type="button"
            variant="contained"
            color="primary"
            size="small"
            onClick={sendData}
          >
            Publish Poll
          </Button>
        </FormControl>
      </form>
    </div>
  )
}

export default CreatePoll
