import axios from 'axios';

export const EVENT_REQUEST = 'EVENT_REQUEST';
export const EVENT_SUCCESS = 'EVENT_SUCCESS';
export const EVENT_ERROR = 'EVENT_ERROR';
export const EVENT_ADD_SUCCESS = 'EVENT_ADD_SUCCESS';
export const EVENT_ADD_ERROR = 'EVENT_ADD_ERROR';

export function getEvents() {
  return async (dispatch) => {
    dispatch({type: EVENT_REQUEST});
  
    const event = await axios.get('/api/event/all');

    dispatch({
      type: EVENT_SUCCESS,
      payload: event.data
    });
  }
}

export function addEvent(event) {
  return (dispatch) => {
    dispatch({
      type: EVENT_ADD_SUCCESS,
      payload: event
    });
  }
}
