import axios from "axios";

// action variable
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";
const SET_USERS = "SET_USERS";

// action creator
export const toggleFollow = id => ({
  type: TOGGLE_FOLLOW,
  id,
});
export const setUsers = users => ({
  type: SET_USERS,
  payload: users,
});

// initial state
const initialState = {
  users: [],
  followed: false,
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
    default:
      return state;
  }
};

export const fetchUsers = () => async dispatch => {
  try {
    const response = await axios.get(
      "https://social-network.samuraijs.com/api/1.0/users"
    );
    dispatch(setUsers(response.data.items));
  } catch (error) {
    console.error(error.message);
  }
};

export default usersReducer;
