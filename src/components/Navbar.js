import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '2px 2px 2px 2px',
    margin: ' 0px 10px ',
  },
}))

const Navbar = () => {
  const classes = useStyles()
  const history = useHistory()
  let render
  if (history.location.pathname === '/') {
    render = (
      <div>
        <Button
          className={classes.root}
          onClick={() => history.push('/create-poll')}
        >
          Create Poll
        </Button>
        <Button
          className={classes.root}
          onClick={() => history.push('/view-poll')}
        >
          View Poll
        </Button>
      </div>
    )
  } else if (history.location.pathname === '/create-poll') {
    render = (
      <div>
        <Button className={classes.root} onClick={() => history.replace('/')}>
          Home
        </Button>
        <Button
          className={classes.root}
          onClick={() => history.push('/view-poll')}
        >
          View Poll
        </Button>
      </div>
    )
  } else if (history.location.pathname === '/view-poll') {
    render = (
      <div>
        <Button className={classes.root} onClick={() => history.replace('/')}>
          Home
        </Button>
        <Button
          className={classes.root}
          onClick={() => history.push('/create-poll')}
        >
          Create Poll
        </Button>
      </div>
    )
  }
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
        ></IconButton>
        <Typography variant="h4" className={classes.title}>
          Voting App
        </Typography>
        {render}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
