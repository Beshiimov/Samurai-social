import { Request } from "../requests/api-key";

const IS_LOAD = "IS_LOAD";
const LOAD_USERS = "LOAD_USERS";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const DISABLE_FOLLOW_BTN = "DISABLE_FOLLOW_BTN";
const UN_DISABLE_FOLLOW_BTN = "UN_DISABLE_FOLLOW_BTN";
const SET_PAGE = "SET_PAGE";

const initialState = {
  error: null,
  users: [],
  page: 1,
  totalCount: null,
  isLoading: true,
  disabledFollowBtn: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOAD:
      return {
        ...state,
        isLoading: action.boolean,
      };
    case LOAD_USERS:
      return {
        ...state,
        error: action.error,
        users: [...action.users],
        totalCount: action.totalCount,
      };
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((e) => {
          if (e.id === action.userId)
            return { ...(e.followed = action.boolean), ...e };
          return e;
        }),
      };
    case DISABLE_FOLLOW_BTN:
      return {
        ...state,
        disabledFollowBtn: [...state.disabledFollowBtn, action.id],
      };
    case UN_DISABLE_FOLLOW_BTN:
      return {
        ...state,
        disabledFollowBtn: state.disabledFollowBtn.filter(
          (u) => u !== action.id
        ),
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.pageNumber,
      };
    default:
      return state;
  }
};

export const isLoad = (boolean) => ({ type: IS_LOAD, boolean });
const loadUsers = (error, users, totalCount) => ({
  type: LOAD_USERS,
  error,
  users,
  totalCount,
});
const toggleFollow = (userId, boolean) => ({
  type: TOGGLE_FOLLOW,
  userId,
  boolean,
});

const setPageNumber = (pageNumber) => ({ type: SET_PAGE, pageNumber });
const disableFollowBtn = (id) => ({ type: DISABLE_FOLLOW_BTN, id });
const unDisableFollowBtn = (id) => ({ type: UN_DISABLE_FOLLOW_BTN, id });

/*=====MiddleWare==========================*/
export const initialLoadUsers = (page) => (dispatch) => {
  Request.usersPage(page).then((r) => {
    dispatch(loadUsers(r.error, r.items, r.totalCount));
    dispatch(isLoad(false));
  });
};

export const setPage = (pageNumber) => (dispatch) => {
  dispatch(isLoad(true));
  dispatch(setPageNumber(pageNumber));
  Request.usersPage(pageNumber).then((r) => {
    dispatch(loadUsers(r.error, r.items, r.totalCount));
    dispatch(isLoad(false));
  });
};

export const follow = (userId, boolean) => (dispatch) => {
  dispatch(disableFollowBtn(userId));
  Request.follow(userId).then((r) => {
    if (r.data.resultCode === 0) {
      dispatch(toggleFollow(userId, boolean));
    }
    dispatch(unDisableFollowBtn(userId));
  });
};

export const unFollow = (userId, boolean) => (dispatch) => {
  dispatch(disableFollowBtn(userId));
  Request.unFollow(userId).then((r) => {
    if (r.data.resultCode === 0) {
      dispatch(toggleFollow(userId, boolean));
    }
    dispatch(unDisableFollowBtn(userId));
  });
};

/*====Export================================*/
export default usersPageReducer;
