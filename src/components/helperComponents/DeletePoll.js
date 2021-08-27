import React from 'react'
import { Button } from '@material-ui/core'
import { deletePoll } from '../../store/PollSlice'
import { useDispatch } from 'react-redux'
const DeletePoll = (props) => {
  const dispatch = useDispatch()
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      size="small"
      onClick={() => {
        dispatch(deletePoll(props.index))
      }}
    >
      Delete Poll
    </Button>
  )
}

export default DeletePoll
