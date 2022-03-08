import * as types from "./ActionTypes";

const initialState = {
  users: [],
  user: {},
  loading: false,
};

const userReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case types.ADD_USER_START:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
case types.USER_DELETE:
  return {
    ...state,
    loading: false,
  }
  case types.ADD_USER:
    return {
      ...state,
      loading: false,
    }
    default:
      return state;
  }
};
export default userReducers;
