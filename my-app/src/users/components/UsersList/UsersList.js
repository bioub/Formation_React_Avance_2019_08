import React, { Component, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';

export function UsersList({ match, users = [], loading = false, onMount = () => { } }) {
  useEffect(() => {
    onMount();
  }, []);

  return (
    <div className="UsersList">
      {loading ? (
        <CircularProgress />
      ) : (
          <List component="nav">
            {users.map(user => (
              <ListItem
                key={user.id}
                button
                component={Link}
                to={match.path + '/' + user.id}
              >
                <ListItemText>{user.name}</ListItemText>
              </ListItem>
            ))}
          </List>
        )}
    </div>
  );
}

// export class UsersList extends Component {
//   componentDidMount() {
//     // redux-thunk / redux-saga / redux-promise / redux-observable
//     this.props.onMount();

//   }
//   // componentDidMount() {
//   //   // redux-thunk / redux-saga / redux-promise / redux-observable
//   //   this.props.dispatch(userFetch());
//   //   getAll().then((users) => {
//   //     this.props.dispatch(userFetchSuccess(users));
//   //   })
//   // }
//   render() {
//     const { match, users = [], loading } = this.props;

//     return (
//       <div className="UsersList">
//         {loading ? (
//           <CircularProgress />
//         ) : (
//           <List component="nav">
//             {users.map(user => (
//               <ListItem
//                 key={user.id}
//                 button
//                 component={Link}
//                 to={match.path + '/' + user.id}
//               >
//                 <ListItemText>{user.name}</ListItemText>
//               </ListItem>
//             ))}
//           </List>
//         )}
//       </div>
//     );
//   }
// }

// export class UsersList extends Component {
//   state = {
//     users: [],
//   };
//   async componentDidMount() {
//     const users = await getAll();
//     this.setState({
//       users,
//     });
//   }
//   render() {
//     const {match} = this.props;

//     return (
//       <div className="UsersList">
//         <List component="nav">
//           {this.state.users.map(user => (
//             <ListItem key={user.id} button component={Link} to={match.path + "/" + user.id}>
//               <ListItemText>{user.name}</ListItemText>
//             </ListItem>
//           ))}
//         </List>
//       </div>
//     );
//   }
// }
