export const SET_USER = 'SET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  user
});


export default function reducer(
  state = {
    user: null
  },
  action
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      break;
  }
  return state;
}
