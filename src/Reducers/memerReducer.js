const initialState = {
  memers: [],
  selectedMemer: {},
  findMemer: [],
  searchMemerrs: [],
  memedd: [],
  selectedMemedd: {},
  findMemedd: [],
  searchMemedd: [],
  selectedMemerTag: [],
  reportData: [],
};

const MemerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MEMER_REQUEST':
      return { ...state, loading: true };

    case 'GET_MEMER_SUCCESS':
      return { ...state, loading: false, memers: action?.payload };

    case 'GET_MEMER_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'GET_MEMEDD_REQUEST':
      return { ...state, loading: true };

    case 'GET_MEMEDD_SUCCESS':
      return { ...state, loading: false, memedd: action?.payload };

    case 'GET_MEMEDD_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'SET_MEMEDD':
      let findMemedd = state.memedd.find(data => action?.payload === data?._id);
      // if(!findMemedd){
      //     findMemedd = state.searchMemedd.find((data) => action?.payload == data?._id)
      // }

      return {
        ...state,
        selectedMemedd: findMemedd,
      };
    case 'SET_MEMERRS':
      let findMemers = state.memers.find(data => action?.payload === data?._id);
      if (findMemers) {
        return {
          ...state,
          selectedMemer: findMemers,
          selectedMemerTag: Array.isArray(findMemers?.Tags)
            ? findMemers?.Tags
            : [findMemers?.Tags],
        };
      } else {
        return state;
      }
    case 'SET_MEMERRS_PRICE_VALUE':
      let findmemer1 = state.memers.find(
        data => action?.payload?.id === data?._id
      );
      findmemer1.price = action?.payload?.price;

      return {
        ...state,
        memers: [...state.memers, findmemer1],
      };
    case 'ADD_SEARCH_MEMERRS_ITEMS':
      const items = action?.payload;

      return {
        ...state,
        loading: false,
        searchMemerrs: items,
      };
    case 'ADD_SEARCH_MEMEDDS_ITEMS':
      const items1 = action?.payload;

      return {
        ...state,
        loading: false,
        searchMemedd: items1,
      };
    case 'ADD_REPORT_DATA':
      return {
        ...state,
        reportData: action?.payload,
      };
    case 'EMPTY_REPORT_DATA':
      return {
        ...state,
        reportData: [],
      };
    default:
      return state;
  }
};

export default MemerReducer;
