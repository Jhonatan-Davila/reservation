import axios from 'axios';

export const RESOURCE_REQUEST = 'RESOURCE_REQUEST';
export const RESOURCE_SUCCESS = 'RESOURCE_SUCCESS';
export const RESOURCE_ERROR = 'RESOURCE_ERROR';

export function getResources() {
  return async (dispatch) => {
    dispatch({type: RESOURCE_REQUEST});
  
    const resource = await axios.get('/api/resource/all');

    dispatch({
      type: RESOURCE_SUCCESS,
      payload: resource.data
    });
  }
};
