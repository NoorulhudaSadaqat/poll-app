import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './views/homePage'
import CreatePoll from './views/createPoll'
import DisplayPoll from './views/displayPoll'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create-poll">
          <CreatePoll />
        </Route>
        <Route path="/view-poll">
          <DisplayPoll />
        </Route>
      </Switch>
    </div>
  )
}

export default App
