// action variable
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";
const CURRENT_PAGE = "CURRENT_PAGE";
const USERS_COUNT = "USERS_COUNT";
const TOGGLE_SPINNER = "TOGGLE_SPINNER";

// action creator
export const toggleFollow = id => ({
  type: TOGGLE_FOLLOW,
  id: id,
});
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});
export const setCurrentPage = page => ({
  type: CURRENT_PAGE,
  currentPage: page,
});
export const setTotalUsersCount = count => ({
  type: USERS_COUNT,
  totalUsersCount: count,
});
export const showSpinner = bool => ({
  type: TOGGLE_SPINNER,
  isFetching: bool,
});

// initial state
const initialState = {
  users: [],
  currentPage: 1,
  totalUsersCount: 0,
  isFetching: false
};

// usersReducer
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? { ...user, followed: !user.followed } : user
        ),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default usersReducer;
