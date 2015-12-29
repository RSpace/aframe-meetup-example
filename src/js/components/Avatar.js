import {Entity} from 'aframe-react'
import React, {Component} from 'react'

export default class Avatar extends Component {
  showDebugInfo = () => {
    console.log(this.props.index, this.props.name, this.props.position, this.props.photoUrl)
  }

  render () {
    const { width, height, depth, photoUrl } = this.props
    const { x, y, z } = this.props.position

    return (
      <Entity geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
              material={{src: `url(${photoUrl})`}}
              position={`${x} ${y} ${z}`}
              onClick={this.showDebugInfo} />
    );
  }
}
