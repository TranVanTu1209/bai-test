import * as actionTypes from './actionTypes';

const initialState = {
  posts: [],
  error: null,
  loading: false
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        posts: payload
      }
    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [...state.post, payload]
      }
    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload)
      }
    default: return state;
  }
} 