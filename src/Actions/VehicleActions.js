import api from '../services/backendApi';

const getMemerRequest = () => {
  return {
    type: 'GET_MEMER_REQUEST',
  };
};

export const getMemerSuccess = Orders => {
  return {
    type: 'GET_MEMER_SUCCESS',
    payload: Orders,
  };
};

const getMemerFailure = error => {
  return {
    type: 'GET_MEMER_FAILURE',
    payload: error,
  };
};
export const GetMemers = (navigate, page, limit) => {
  return dispatch => {
    dispatch(getMemerRequest());
    const queryParams = new URLSearchParams();

    queryParams.append('limit', limit);
    queryParams.append('page', page);
    api
      .get(`memerr/admin?${queryParams.toString()}`)
      .then(response => response.data)
      .then(data => {
        // console.log(data)
        dispatch(getMemerSuccess(data?.result));
      })
      .catch(error => {
        const errorMessage = error.message;
        dispatch(getMemerFailure(errorMessage));
      });
  };
};
const getMemeddRequest = () => {
  return {
    type: 'GET_MEMEDD_REQUEST',
  };
};

export const getMemeddSuccess = Orders => {
  return {
    type: 'GET_MEMEDD_SUCCESS',
    payload: Orders,
  };
};

const getMemeddFailure = error => {
  return {
    type: 'GET_MEMEDD_FAILURE',
    payload: error,
  };
};
export const GetMemedd = navigate => {
  return dispatch => {
    dispatch(getMemeddRequest());
    api
      .get('memedd')
      .then(response => response.data)
      .then(data => {
        // console.log(data)
        dispatch(getMemeddSuccess(data?.result));
      })
      .catch(error => {
        const errorMessage = error.message;

        dispatch(getMemeddFailure(errorMessage));
      });
  };
};
export const setMemedd = id => {
  return {
    type: 'SET_MEMEDD',
    payload: id,
  };
};
export const setMemerrs = id => {
  return {
    type: 'SET_MEMERRS',
    payload: id,
  };
};
export const setMemerPriceValue = (id, value) => {
  return {
    type: 'SET_MEMERRS_PRICE_VALUE',
    payload: { id, value },
  };
};

export const addMemers = items => {
  return {
    type: 'ADD_SEARCH_MEMERRS_ITEMS',
    payload: items,
  };
};
export const addMemedd = items => {
  return {
    type: 'ADD_SEARCH_MEMEDDS_ITEMS',
    payload: items,
  };
};
export const addReportData = data => {
  return {
    type: 'ADD_REPORT_DATA',
    payload: data,
  };
};
export const emptyReportData = () => {
  return {
    type: 'EMPTY_REPORT_DATA',
  };
};
// export const addPlatform = (items) =>{
//   return {
//       type: "ADD_SEARCH_ITEMS",
//       payload: items
//     };
// }
