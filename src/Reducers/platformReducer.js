const initialState = {
  platform: [],
  searchPlatforms: [],
  selectedPlatform: {},
  findPlatform: [],
};

const PlatformReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_PLATFORM_REQUEST':
      return { ...state, loading: true };

    case 'GET_PLATFORM_SUCCESS':
      return { ...state, loading: false, platform: action?.payload };

    case 'GET_PLATFORM_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_SEARCH_ITEMS':
      const items = action?.payload;

      return {
        ...state,
        loading: false,
        //   platform:action?.payload,
        searchPlatforms: items,
      };
    case 'SET_PLATFORM':
      let findPlatform = state.platform.find((data) => action?.payload === data?._id);

      if (!findPlatform) {
        findPlatform = state.searchPlatforms.find((data) => action?.payload === data?._id);
      }
      return {
        ...state,
        selectedPlatform: findPlatform,
      };

    default:
      return state;
  }
};

export default PlatformReducer;
