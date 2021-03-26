import * as actions from '../actions';

const initialState = [];

const eventReducer = function(state = initialState, action) {
  switch (action.type) {
    case actions.EVENT_REQUEST: {
      return [...initialState];
    }
    case actions.EVENT_SUCCESS: {
      return [...action.payload];
    }
    case actions.EVENT_ADD_SUCCESS: {
      return [
        ...state,
        action.payload
      ]
    }
    default: {
      return [...state];
    }
  }
};

export default eventReducer;
