import api from '../services/backendApi';

const getPlatformRequest = () => {
  return {
    type: 'GET_PLATFORM_REQUEST',
  };
};

export const getPlatformSuccess = (Orders) => {
  return {
    type: 'GET_PLATFORM_SUCCESS',
    payload: Orders,
  };
};

const getPlatformFailure = (error) => {
  return {
    type: 'GET_PLATFORM_FAILURE',
    payload: error,
  };
};

export const GetPlatforms = (page, limit) => {
  const queryParams = new URLSearchParams();

  queryParams.append('limit', limit);
  queryParams.append('page', page);

  const url = `platform?${queryParams.toString()}`;
  return (dispatch) => {
    dispatch(getPlatformRequest());
    api
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        dispatch(getPlatformSuccess(data?.result));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getPlatformFailure(errorMessage));
      });
  };
};
export const setPlatform = (id) => {
  return {
    type: 'SET_PLATFORM',
    payload: id,
  };
};
export const addPlatform = (items) => {
  return {
    type: 'ADD_SEARCH_ITEMS',
    payload: items,
  };
};
