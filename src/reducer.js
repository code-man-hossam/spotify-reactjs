export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
}
// 'BQCplIhmM4URpolsAf3rS9UnzJKweC79-oZy5a15qNy-aBSRaiaw2G06ESuq99bMyRGYZqD0xos4ck3LfG9eAWqEzwDPaNa7lFmU1IWNYdaxaIkrOXjF-cZmnCPAXyvIx3aAQQgpwrVVlfpiBSlrXDhGxkDqMbwrn99y4VWJzX06v4ug'
const reducer = (state, action) => {
  console.log(action)

  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }

    case 'SET_TOKEN':
      return { ...state, token: action.token }

    case 'SET_PLAYLISTS':
      return { ...state, playlists: action.playlists }

    case 'SET_DISCOVER_WEEKLY':
      return { ...state, discover_weekly: action.discover_weekly }
    default:
      return state
  }
}

export default reducer
