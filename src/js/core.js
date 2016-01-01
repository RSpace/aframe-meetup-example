import {Map} from 'immutable'

export const INITIAL_STATE = Map({vrMode: false})
export const MEMBER_TYPES = ['hustler', 'hipster', 'hacker', '']

export const TYPE_TO_COLOR_MAP = {
  '': 'ffffff',
  'hustler': 'ff8800',
  'hipster': '32e600',
  'hacker': 'b400e6'
}

export function setNextMemberType(membersState, memberId) {

  function getNextMemberType(member) {
    let typeIndex = MEMBER_TYPES.indexOf(member.get('type'));
    typeIndex++;
    if (typeIndex >= MEMBER_TYPES.length) {
      typeIndex = 0;
    }
    return MEMBER_TYPES[typeIndex]
  }

  return membersState.update(
    membersState.findIndex(member => { return member.get('id') === memberId }),
    member => { return member.set('type', getNextMemberType(member)) }
  )
}

export function enableVRMode(state) {
  return state.set('vrMode', true)
}

export function disableVRMode(state) {
  return state.set('vrMode', false)
}