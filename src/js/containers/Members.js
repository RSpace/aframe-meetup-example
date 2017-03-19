import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Member from '../components/Member'
import { circularPositionFromIndex } from '../utils/calculations'
import { nextMemberType } from '../redux/actions'

const styles = require('../../scss/Members.scss')
const boxSize = 0.5

class Members extends Component {
  render () {
    let members = this.props.members

    if (this.props.vrMode) {
      return (
        <Entity>
          {members.map(this.renderMember.bind(this))}
          <a-animation attribute="rotation"
            dur="360000"
            fill="forwards"
            to="0 360 0"
            repeat="indefinite"
            easing="linear">
          </a-animation>
        </Entity>
      )
    } else {
      return (
        <div className="members-container">
          {members.map(this.renderMember.bind(this))}
        </div>
      )
    }
  }

  renderMember (member, index) {
    let position = circularPositionFromIndex(index, boxSize)

    return (
      <Member key={index} id={member.get('id')} name={member.get('name')} photoUrl={member.get('photo_url')}
              type={member.get('type')}
              width={boxSize} height={boxSize} depth={boxSize}
              position={position}
              index={index}
              onClick={this.props.onAvatarClicked}
              vrMode={this.props.vrMode} />
    )
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    members: state.get('members'),
    vrMode: state.get('vrMode')
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onAvatarClicked: (memberId) => dispatch(nextMemberType(memberId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)