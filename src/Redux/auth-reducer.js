import { Auth } from "../requests/api-key";

const LOAD_USER_DATA = "LOAD_USER_DATA";
const IS_LOADING = "IS_LOADING";
const IS_AUTH_SUCCESS = "IS_AUTH_SUCCESS";
const LOGOUT = "LOGOUT";

const initialState = {
  userData: {
    email: null,
    id: null,
    login: null,
    messages: null,
  },
  isLoading: true,
  isAuthSuccess: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.boolean,
      };
    case IS_AUTH_SUCCESS:
      return {
        ...state,
        isAuthSuccess: action.boolean,
      };
    case LOAD_USER_DATA:
      return {
        ...state,
        userData: {
          email: action.data.data.email,
          id: action.data.data.id,
          login: action.data.data.login,
          messages: action.data.messages,
        },
      };
    case LOGOUT:
      return initialState;

    default:
      return state;
  }
};

export const isLoad = (boolean) => ({ type: IS_LOADING, boolean });
const isAuthSuccess = (boolean) => ({ type: IS_AUTH_SUCCESS, boolean });
const loadUserData = (data, dataMessage) => ({
  type: LOAD_USER_DATA,
  data,
  dataMessage,
});
const logoutSuccess = () => ({ type: LOGOUT });

/*====Middleware=========================*/
export const auth = () => (dispatch) => {
  Auth.auth().then((r) => {
    if (r.data.resultCode === 0) {
      dispatch(isAuthSuccess(true));
      dispatch(isLoad(false));
      dispatch(loadUserData(r.data, r.messages));
    } else {
      dispatch(isLoad(false));
      dispatch(isAuthSuccess(false));
    }
  });
};

export const login = () => (dispatch) => {
  Auth.login().then((r) => {
    debugger;
  });
};

export const logout = () => (dispatch) => {
  Auth.logout().then((r) => {
    if (r.data.resultCode === 0) {
      dispatch(logoutSuccess());
      dispatch(isLoad(false));
    }
  });
};

export default authReducer;
