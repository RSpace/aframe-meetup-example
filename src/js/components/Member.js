import React, {Component} from 'react'
import {Entity} from 'aframe-react'
import classNames from 'classnames'
import { TYPE_TO_COLOR_MAP } from '../core'

export default class Member extends Component {
  render () {
    const { id, name, photoUrl } = this.props

    if (this.props.vrMode) {
      const { width, height, depth } = this.props
      const { x, y, z } = this.props.position
      const color = `#${TYPE_TO_COLOR_MAP[this.props.type || '']}`

      return (
        <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
                material={{src: `url(${photoUrl})`, color}}
                position={`${x} ${y} ${z}`}
                onClick={() => {this.props.onClick(id) }} />
      )

    } else {
      var memberClass = classNames({
        'member-component': true,
        'member-component__hipster': this.props.type === 'hipster',
        'member-component__hacker': this.props.type === 'hacker',
        'member-component__hustler': this.props.type === 'hustler'
      })

      return (
        <div className={memberClass} onClick={() => {this.props.onClick(id) }} title={name}>
          <img src={photoUrl} width="100" height="100" />
        </div>
      )

    }
  }
}
