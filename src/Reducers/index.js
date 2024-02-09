import { combineReducers } from "redux";
import AdminReducer from './adminReducer'
import MemerReducer from './memerReducer'
import CampaignReducer from './campaignReducer'
import PlatformReducer from './platformReducer'
import TagReducer from './tagReducer'

const reducers = combineReducers({
  AdminReducer,
  MemerReducer,
  CampaignReducer,
  PlatformReducer,
  TagReducer
});


export default reducers;