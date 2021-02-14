import * as actions from '../actions';

const initialState = [];

const resourceReducer = function(state = initialState, action) {
  switch (action.type) {
    case actions.RESOURCE_REQUEST: {
        return [...initialState];
    }
    case actions.RESOURCE_SUCCESS: {
      return [...action.payload];
    }
    default: {
      return [...state];
    }
  }
};

export default resourceReducer;
