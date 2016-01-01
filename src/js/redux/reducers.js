import {INITIAL_STATE, setNextMemberType, enableVRMode, disableVRMode} from '../core'

export default function avatarHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_MEMBER_TYPE':
      return state.update('members', membersState => setNextMemberType(membersState, action.memberId))
    case 'ENABLE_VR_MODE':
      return enableVRMode(state)
    case 'DISABLE_VR_MODE':
      return disableVRMode(state)
  }
  return state
}