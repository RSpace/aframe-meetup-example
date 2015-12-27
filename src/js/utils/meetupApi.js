import fetchJsonp from 'fetch-jsonp'
import Immutable from 'immutable'

const API_ROOT = 'https://api.meetup.com'
const GET_MEMBERS_URL = API_ROOT + '/2/rsvps?offset=0&format=json&event_id=226573940&photo-host=public&page=100&fields=&order=event&desc=false&sig_id=45273132&sig=22e11982b405a952554ee47b9b55bac1d7eb0cd9'

export function getMembers() {
  return fetchJsonp(GET_MEMBERS_URL)
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      let members = []

      for(let result of json.results) {
        if(result.member_photo) {
          members.push({
            id: result.member.member_id,
            name: result.member.name,
            photo_url: result.member_photo.photo_link
          })
        }
      }

      return Immutable.List(members)
    })
}