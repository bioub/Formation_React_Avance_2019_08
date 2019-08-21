import { userFetch } from "./actions";

test('userFetch action creator', () => {
  const action = userFetch();
  expect(action).toEqual({type: 'USER_FETCH'});
});
