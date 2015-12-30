export function nextMemberType(memberId) {
  return { type: 'NEXT_MEMBER_TYPE', memberId }
}

export function toggleVRMode() {
  return { type: 'TOGGLE_VR_MODE' }
}