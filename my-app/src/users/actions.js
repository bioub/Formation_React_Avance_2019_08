// @flow
import { USER_FETCH, USER_FETCH_SUCCESS } from './constants';
import { getAll } from './api/users';

type FSA<P = empty> = {
  type: string;
  payload?: P;
}

type UserFetchSuccessAction = FSA<any[]>;

export function userFetch(): FSA<> {
  return {
    type: USER_FETCH,
  };
}

export function userFetchSuccess(users: any[]): FSA<any[]> {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}

export function userFetchRequested() {
  return async function(dispatch) {
    dispatch(userFetch());
    const users = await getAll();
    dispatch(userFetchSuccess(users));
  };
}

// Pour générer des actions, reducers, selecteurs :
// - redux-starter-kit (officiel, mais récent)
// - redux-actions (historique)

// function createActionCreator(type) {
//   return function(payload) {
//     return {
//       type,
//       payload,
//     };
//   }
// }


// const userFetchError = createActionCreator('USER_FETCH_ERROR');
