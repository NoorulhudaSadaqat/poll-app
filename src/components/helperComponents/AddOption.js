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
        props.updateNoOfOptions(props.option)
      }}
    >
      Add Option
    </Button>
  )
}

export default AddOption
