import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Success from './Success'
import Fail from './Fail'
import Hints from './Hints'
import Game from './Game'

const App = () => {
  return (
    <>
      <h1>Code Busters</h1>
      <div className='game'>
        <Route exact path='/'>
          {<Redirect to='/game/find' />}
        </Route>
        <Route path='/game/:name' component={Hints} />
        <Route path='/game/:name' component={Game} />
        <Route exact path='/fail' component={Fail} />
        <Route exact path='/success' component={Success} />
      </div>
    </>
  )
}

export default App

/*
 first game page = /game/find
 second = /game/
*/