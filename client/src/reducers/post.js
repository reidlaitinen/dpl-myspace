import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/posts'

const posts = ( state = [], action ) => {
  switch (action.type) {
    case ADD_POST:
      return [action.post, ...state]
    case DELETE_POST:
      return state.filter(post => post.id !== action.post.id)
    case UPDATE_POST:
      return (state.map(post => post.id === action.post.id ? action.post : post ))
    default:
      return state;
  }
}

export default posts;