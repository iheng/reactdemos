import React from 'react'
import {render} from 'react-dom'
import {App} from './components/App'
import {E404} from './components/E404'
import {AddDayForm} from './components/AddDayForm'
import { Router, Route, hashHistory } from 'react-router'

window.React=React
render(
  	<Router history={hashHistory}>
  		<Route path="/" component={App}/>
      <Route path="/list-days" component={App}>
         <Route path= ":filter" component={App}/>
      </Route>
      <Route path="/add-day" component={App}/>

  		<Route path="*" component={E404}/>
  	</Router>,

  document.getElementById('root')
)
