import { connect } from 'react-redux';
import { selectUsersItemsById, selectUsersLoading } from '../selectors';
import { UsersShow } from '../components/UsersShow/UsersShow';

function mapStateToProps(state, ownProps) {
  return {
    user: selectUsersItemsById(state, ownProps.match.params.id),
    loading: selectUsersLoading(state),
  };
}

export const UsersShowContainer = connect(mapStateToProps)(UsersShow);
