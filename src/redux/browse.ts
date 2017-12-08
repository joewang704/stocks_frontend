import { fetchBrowseData } from '../api'

export interface BrowseState {
  readonly popular: Array<{
    readonly image: string,
    readonly name: string,
  }>,
}

export const GET_BROWSE: string = 'GET_BROWSE'

export const getBrowseData = () => {
  return (dispatch) => {
    fetchBrowseData().then(({ data }) => dispatch({
      type: GET_BROWSE,
      payload: data,
    })).catch(console.log)
  }
}

const initialState: BrowseState = {
  popular: [],
}

export const browse = (state = initialState, action: { type: string, payload: BrowseState }) => {
  switch (action.type) {
    case GET_BROWSE:
      return action.payload
    default:
      return state
  }
}
