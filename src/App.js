import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Voila from './Voila'
import Distract from './Distract'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Voila} />
            <Route path="/about" component={Distract} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}