const initialState = {
  campaigns: [],
  selectedCampaign: {},
  selectedCampaignBrand: [],
  selectedCampaignMemerrs: [],
  selectedCampaignContributors: [],
  selectedCampaignDont: [],
  selectedCampaignDos: [],
  selectedCampaignMessages: [],
  selectedCampaignObjectives: [],
  selectedCampaignPlatform: [],
  selectedCampaignResources: [],
  findCampaign: [],
  searchCampaign: [],
};

const CampaignReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CAMPAIGN_REQUEST':
      return { ...state, loading: true };

    case 'GET_CAMPAIGN_SUCCESS':
      const newData = action?.payload?.map((data, i) => ({ ...data, key: i }));
      return { ...state, loading: false, campaigns: newData };

    case 'GET_CAMPAIGN_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'SET_CAMPAIGN':
      const findCampaign = state.campaigns.find(
        data => data?._id === action?.payload
      );
      if (findCampaign) {
        return {
          ...state,
          selectedCampaign: Array.isArray(findCampaign)
            ? findCampaign
            : [findCampaign],
          selectedCampaignBrand: Array.isArray(findCampaign?.Brand)
            ? findCampaign?.Brand
            : [findCampaign?.Brand],
          selectedCampaignMemerrs: Array.isArray(findCampaign?.Memerrs)
            ? findCampaign?.Memerrs
            : [findCampaign?.Memerrs],
          selectedCampaignContributors: Array.isArray(
            findCampaign?.contributors
          )
            ? findCampaign?.contributors
            : [findCampaign?.contributors],
          selectedCampaignDont: Array.isArray(findCampaign?.donts)
            ? findCampaign?.donts
            : [findCampaign?.donts],
          selectedCampaignDos: Array.isArray(findCampaign?.dos)
            ? findCampaign?.dos
            : [findCampaign?.dos],
          selectedCampaignMessages: Array.isArray(findCampaign?.messages)
            ? findCampaign?.messages
            : [findCampaign?.messages],
          selectedCampaignObjectives: Array.isArray(findCampaign?.objectives)
            ? findCampaign?.objectives
            : [findCampaign?.objectives],
          selectedCampaignPlatform: Array.isArray(findCampaign?.platform)
            ? findCampaign?.platform
            : [findCampaign?.platform],
          selectedCampaignResources: Array.isArray(findCampaign?.resources)
            ? findCampaign?.resources
            : [findCampaign?.resources],
        };
      } else {
        return state;
      }
    case 'ADD_SEARCH_CAMPAIGN_ITEMS':
      const items1 = action?.payload;

      return {
        ...state,
        loading: false,
        searchCampaign: items1,
      };
    default:
      return state;
  }
};

export default CampaignReducer;
