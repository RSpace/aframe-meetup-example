import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './redux/store'
import { getMembers } from './utils/meetupApi'
import {INITIAL_STATE} from './core'

getMembers().then(members => {
  const initialState = INITIAL_STATE.set('members', members)
  const store = configureStore(initialState)

  render(
    <Root store={store} />,
    document.getElementById('root')
  )
}).catch(error => {
  console.error(error.stack)
})
