import {INITIAL_STATE, setNextAvatarColor} from '../core'

export default function avatarHandler(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'NEXT_COLOR':
      return state.update('members', membersState => setNextAvatarColor(membersState, action.memberId))
  }
  return state
}