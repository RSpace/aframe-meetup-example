import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Member from '../components/Member'
import { circularPositionFromIndex } from '../utils/calculations'
import { nextMemberType } from '../redux/actions'

const boxSize = 0.5

class Avatars extends Component {
  render () {
    let members = this.props.members

    if (this.props.vrMode) {
      return (
        <Entity>
          {members.map(this.renderMember.bind(this))}
        </Entity>
      )
    } else {
      return (
        <div className="avatars-component">
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
)(Avatars)