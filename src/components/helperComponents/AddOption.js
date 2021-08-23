import React from 'react'
import { Button } from '@material-ui/core'

const AddOption = (props) => {
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      size="small"
      onClick={() => {
        props.updateNoOfOptions(props.noOfOptions + 1)
        console.log('No of Options : ' + (props.noOfOptions + 1))
      }}
    >
      Add Option
    </Button>
  )
}

export default AddOption
