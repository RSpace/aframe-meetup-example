import React, {Component} from 'react'
import {Entity} from 'aframe-react'
import { TYPE_TO_COLOR_MAP } from '../core'

export default class Member extends Component {
  render () {
    const { id, width, height, depth, name, photoUrl } = this.props
    const { x, y, z } = this.props.position
    const color = `#${TYPE_TO_COLOR_MAP[this.props.type || '']}`

    if (this.props.vrMode) {

      return (
        <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
                material={{src: `url(${photoUrl})`, color}}
                position={`${x} ${y} ${z}`}
                onClick={() => {this.props.onClick(id) }} />
      )

    } else {

      return (
        <div className="member-component" onClick={() => {this.props.onClick(id) }}>
          <img src={photoUrl} width="100" height="100" />
          <span className="member-component__name" style={{color}}>{name}</span>
        </div>
      )

    }
  }
}
