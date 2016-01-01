export function nextMemberType(memberId) {
  return { type: 'NEXT_MEMBER_TYPE', memberId }
}

export function enableVRMode() {
  return { type: 'ENABLE_VR_MODE' }
}

export function disableVRMode() {
  return { type: 'DISABLE_VR_MODE' }
}