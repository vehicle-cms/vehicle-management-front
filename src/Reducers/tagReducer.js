const initialState = {
  tags: [],
  searchTag: [],
  selectedTags: {},
  findTags: [],
};

const TagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TAGS_REQUEST':
      return { ...state, loading: true };

    case 'GET_TAGS_SUCCESS':
      return { ...state, loading: false, tags: action?.payload, searchTag: [], selectedTags: {}, findTags: [] };

    case 'GET_TAGS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_SEARCH_ITEMS':
      const items = action?.payload;

      return {
        ...state,
        loading: false,
        searchTag: items,
      };

    case 'SET_TAG':
      let findTag = state.tags.find((data) => action?.payload === data?._id);

      if (!findTag) {
        findTag = state.searchTag.find((data) => action?.payload === data?._id);
      }
      return {
        ...state,
        selectedTags: findTag,
      };
    default:
      return state;
  }
};

export default TagReducer;
