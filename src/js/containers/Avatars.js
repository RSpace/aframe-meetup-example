import {Entity} from 'aframe-react'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import Avatar from '../components/Avatar'
import { circularPositionFromIndex } from '../utils/calculations'
import { nextAvatarColor } from '../redux/actions'

const boxSize = 0.5

class Avatars extends Component {
  render () {
    let members = this.props.members
    return (
      <Entity>
        {members.map((member, index) => {
          let position = circularPositionFromIndex(index, boxSize)
          return (
            <Avatar key={index} id={member.get('id')} name={member.get('name')} photoUrl={member.get('photo_url')}
                    color={member.get('color')}
                    width={boxSize} height={boxSize} depth={boxSize}
                    position={position}
                    index={index}
                    onClick={this.props.onAvatarClicked} />
          )
        })}
      </Entity>
    );
  }
}

// Which part of the Redux global state does our component want to receive as props?
function mapStateToProps(state) {
  return {
    members: state.get('members')
  }
}

// Which action creators does it want to receive by props?
function mapDispatchToProps(dispatch) {
  return {
    onAvatarClicked: (memberId) => dispatch(nextAvatarColor(memberId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatars)