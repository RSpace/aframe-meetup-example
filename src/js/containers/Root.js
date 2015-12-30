import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Wrapper from './Wrapper'

export default class Root extends Component {
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <Wrapper/>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
