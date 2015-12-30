import {INITIAL_STATE, setNextMemberType, toggleVRMode} from '../core'

export default function avatarHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_MEMBER_TYPE':
      return state.update('members', membersState => setNextMemberType(membersState, action.memberId))
    case 'TOGGLE_VR_MODE':
      return toggleVRMode(state)
  }
  return state
}