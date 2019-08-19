import { connect } from 'react-redux';
import { UsersList } from '../components/UsersList/UsersList';
import { selectUsersItems, selectUsersLoading } from '../selectors';

function mapStateToProps(state) {
  return {
    users: selectUsersItems(state),
    loading: selectUsersLoading(state),
  };
}

export const UserListContainer = connect(mapStateToProps)(UsersList);
