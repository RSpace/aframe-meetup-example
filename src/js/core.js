import {Map} from 'immutable'

export const INITIAL_STATE = Map()

const COLORS = ['ff8800', '32e600', 'b400e6', 'ffffff']
export function setNextAvatarColor(membersState, memberId) {

  function getNextColor(member) {
    let colorIndex = COLORS.indexOf(member.get('color'));
    colorIndex++;
    if (colorIndex >= COLORS.length) {
      colorIndex = 0;
    }
    return COLORS[colorIndex]
  }

  return membersState.update(
    membersState.findIndex(member => { return member.get('id') === memberId }),
    member => { return member.set('color', getNextColor(member)) }
  )
}