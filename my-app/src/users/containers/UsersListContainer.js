import { connect } from 'react-redux';
import { UsersList } from '../components/UsersList/UsersList';
import { selectUsersItems, selectUsersLoading } from '../selectors';
import { userFetchRequested } from '../actions';

function mapStateToProps(state) {
  return {
    users: selectUsersItems(state),
    loading: selectUsersLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount() {
      dispatch(userFetchRequested());
    },
  };
}

export const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);
