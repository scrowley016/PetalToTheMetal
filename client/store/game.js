import {createStore, applyMiddleware} from 'redux'
import reduxLogger from 'redux-logger'

// Type constants
const INCREMENT = 'INCREMENT'

// Action creators
export const incrementCounter = () => {
  return {
    type: INCREMENT
  }
}

// reducer

const initialState = {
  count: 0
}

const gameStore = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    default:
      return state
  }
}

const store = createStore(gameStore, applyMiddleware(reduxLogger))

export default store
