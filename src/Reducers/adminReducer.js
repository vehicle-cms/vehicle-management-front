const initialState = {
  isLoginIsRegister: false,
  admins: [],
  users: [],
  selectedAdmin: {},
  searchAdmin: [],
  findUser: [],
  visible: false,
  admin: 0,
  brand: 0,
  campaign: 0,
  approved: 0,
  rejected: 0,
  pending: 0,
  memedd: 0,
  memerr: 0,
  platform: 0,
  tag: 0,
};

const AdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADMINS_REQUEST':
      return { ...state, loading: true };
    case 'GET_ADMINS_SUCCESS':
      const admins = action.payload;

      const adminData = [];
      const userData = [];
      admins?.forEach((data) => {
        if (data?.isAdmin) {
          adminData.push(data);
        } else {
          userData.push(data);
        }
      });

      return { ...state, loading: false, admins: adminData, users: userData };
    case 'GET_ADMINS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'GET_COUNT_REQUEST':
      return { ...state, loading: true };
    case 'GET_COUNT_SUCCESS':
      return {
        ...state,
        loading: false,

        admin: action?.payload?.admin,
        brand: action?.payload?.brand,
        campaign: action?.payload?.campaign,
        approved: action?.payload?.meme?.approved,
        rejected: action?.payload?.meme?.rejected,
        pending: action?.payload?.meme?.pending,
        memedd: action?.payload?.memedd,
        memerr: action?.payload?.memerr,
        platform: action?.payload?.platform,
        tag: action?.payload?.tag,
      };
    case 'GET_COUNT_FAILURE':
      return { ...state, loading: false, error: action.payload };

    case 'GET_BY_USERNAME':
      if (action?.payload?.value === 'admin') {
        const findAdminByUsername = state.admins.filter((data) => action.payload?.username === data.username);
        return {
          ...state,
          finduser: Array.isArray(findAdminByUsername) ? [...findAdminByUsername] : [findAdminByUsername],
        };
      } else {
        const findUserByUsername = state.users.filter((data) => action.payload?.username === data.username);
        return {
          ...state,
          finduser: Array.isArray(findUserByUsername) ? [...findUserByUsername] : [findUserByUsername],
        };
      }

    case 'GET_BY_EMAIL':
      if (action?.payload?.value === 'admin') {
        const findAdminByEmail = state.admins.find((data) => action?.payload?.email === data?.email);
        return {
          ...state,
          finduser: Array.isArray(findAdminByEmail) ? [...findAdminByEmail] : [findAdminByEmail],
        };
      } else {
        const findUserByEmail = state.users.find((data) => action.payload?.email === data?.email);
        return {
          ...state,
          finduser: Array.isArray(findUserByEmail) ? [...findUserByEmail] : [findUserByEmail],
        };
      }

    case 'GET_BY_MOBILE':
      if (action?.payload?.value === 'admin') {
        const findAdminByMobile = state.admins.find((data) => action?.payload?.mobile === data?.mobile);
        return {
          ...state,
          finduser: Array.isArray(findAdminByMobile) ? [...findAdminByMobile] : [findAdminByMobile],
        };
      } else {
        const findUserByEmail = state.users.find((data) => action.payload?.mobile === data?.mobile);
        return {
          ...state,
          finduser: Array.isArray(findUserByEmail) ? [...findUserByEmail] : [findUserByEmail],
        };
      }

    case 'GET_SELECTED_ADMIN':
      const finduser = state.users.find((data) => action.payload === data?._id);
      return {
        ...state,
        selectedAdmin: finduser,
      };

    case 'SET_SHOW':
      return {
        ...state,
        isLoginIsRegister: action?.payload,
      };
    case 'ADD_ADMIN':
      const items1 = action?.payload;

      return {
        ...state,
        loading: false,
        searchAdmin: items1,
      };
    case 'SET_VISIBLE':
      return {
        ...state,
        visible: true,
      };
    case 'CLOSE_VISIBLE':
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default AdminReducer;
