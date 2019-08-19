import { USER_FETCH, USER_FETCH_SUCCESS } from './constants';

const initialValue = {
  loading: false,
  items: [],
};

export function usersReducer(previousState = initialValue, { type, payload }) {
  switch (type) {
    case USER_FETCH:
      return {
        ...previousState,
        loading: true,
        items: [],
      };
    case USER_FETCH_SUCCESS:
      return {
        ...previousState,
        loading: false,
        items: payload,
      };
    default:
      return previousState;
  }
}
