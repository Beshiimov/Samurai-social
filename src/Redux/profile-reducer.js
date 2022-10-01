import { Request } from "../requests/api-key";

const LOAD_USER_PROFILE = "LOAD_USER_PROFILE";
const ERROR = "ERROR";
const RESET_USER_PROFILE = "RESET_USER_PROFILE";

const initialState = {
  user: {
    aboutMe: null,
    contacts: {},
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    userId: null,
    photos: {
      small: null,
      large: null,
    },
  },
  isLoad: true,
  error: false,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_PROFILE:
      return {
        user: {
          aboutMe: action.data.aboutMe,
          contacts: action.data.contacts,
          lookingForAJob: action.data.lookingForAJob,
          lookingForAJobDescription: action.data.lookingForAJobDescription,
          fullName: action.data.fullName,
          userId: action.data.userId,
          photos: action.data.photos,
        },
        isLoad: false,
        error: false,
      };
    case ERROR:
      return {
        ...state,
        error: action.error,
      };
    case RESET_USER_PROFILE:
      return initialState;

    default:
      return state;
  }
};

const updateUserProfile = (data) => ({ type: LOAD_USER_PROFILE, data });
const error = (error) => ({ type: ERROR, error });
export const resetUserProfile = () => ({ type: RESET_USER_PROFILE });

/*====Middleware==================================*/
export const loadUserProfile = (userId) => (dispatch) => {
  Request.viewUser(userId)
    .then((r) => {
      dispatch(updateUserProfile(r.data));
    })
    .catch((err) => dispatch(error(err)));
};

export default profileReducer;
