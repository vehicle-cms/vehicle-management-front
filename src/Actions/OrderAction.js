import api from '../services/backendApi';

const getCampaignRequest = () => {
  return {
    type: 'GET_CAMPAIGN_REQUEST',
  };
};

export const getCampaignSuccess = (Orders) => {
  return {
    type: 'GET_CAMPAIGN_SUCCESS',
    payload: Orders,
  };
};

const getCampaignFailure = (error) => {
  return {
    type: 'GET_CAMPAIGN_FAILURE',
    payload: error,
  };
};
export const GetCampaign = (navigate) => {
  return (dispatch) => {
    dispatch(getCampaignRequest());
    api
      .get('campaigns/')
      .then((response) => response.data)
      .then((data) => {
        dispatch(getCampaignSuccess(data?.result));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(getCampaignFailure(errorMessage));
      });
  };
};
export const setCampaign = (id) => {
  return {
    type: 'SET_CAMPAIGN',
    payload: id,
  };
};
export const addCampaign = (items) => {
  return {
    type: 'ADD_SEARCH_CAMPAIGN_ITEMS',
    payload: items,
  };
};
