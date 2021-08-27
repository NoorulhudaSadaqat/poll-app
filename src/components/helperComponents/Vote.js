import React from 'react'
import { Button } from '@material-ui/core'
import { vote } from '../../store/PollSlice'
import { useDispatch } from 'react-redux'

const Vote = (props) => {
  const dispatch = useDispatch()
  return (
    <Button
      type="button"
      variant="contained"
      color="secondary"
      size="small"
      onClick={() => {
        dispatch(vote({ index: props.index, option: props.optionIndex }))
      }}
    >
      Vote
    </Button>
  )
}

export default Vote
