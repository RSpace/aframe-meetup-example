import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import { getMembers } from './utils/meetupApi'

//getMembers().then(members => {
  const store = configureStore({members: [{ id: 1, name: 'Casper', photo_url: 'http://gravatar.com/avatar/2fd982df89c3c697c487514796393bc5?s=80' }]})

  render(
    <Root store={store} />,
    document.getElementById('root')
  )
//})
