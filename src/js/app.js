import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import { getMembers } from './utils/meetupApi'

getMembers().then(members => {
  const store = configureStore({members})

  render(
    <Root store={store} />,
    document.getElementById('root')
  )
})
