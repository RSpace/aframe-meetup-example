import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import 'aframe-core';
import {Animation, Entity, Scene} from 'aframe-react';

import Camera from '../components/Camera';
import Cursor from '../components/Cursor';
import Light from '../components/Light';
import Sky from '../components/Sky';
import Members from './Members'


export default class Root extends Component {
  render() {
    const { store } = this.props

    if (store.getState().get('vrMode') ) {
      return (
        <Provider store={store}>
          <div>
            <Scene>
              <Camera><Cursor/></Camera>

              <Sky/>

              <Light type="ambient" color="#888"/>
              <Light type="directional" intensity="0.5" position="-1 1 0"/>
              <Light type="directional" intensity="1" position="1 1 0"/>

              <Members/>
            </Scene>

            <DevTools />
          </div>
        </Provider>
      )
    } else {
      return (
        <Provider store={store}>
          <div>
            <Members/>
            <DevTools />
          </div>
        </Provider>
      )
    }

  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
