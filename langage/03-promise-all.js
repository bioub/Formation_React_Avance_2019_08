const db = {
  '/users': [
    {id: 1, name: 'A', role_id: 2},
    {id: 2, name: 'B', role_id: 1},
  ],
  '/roles/1': {id: 1, name: 'USER'},
  '/roles/2': {id: 2, name: 'ADMIN'},
};


function ajax(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!db[url]) {
        return reject(new Error('Not Found'));
      }
      resolve(db[url]);
    }, Math.random() * 100);
  });
}

ajax('/users').then((users) => {
  Promise.all(users.map(user => ajax(`/roles/${user.role_id}`)))
    .then((roles) => {
      console.log(roles);
    });
})
.catch((err) => console.log(err.message));


async function getUsersWithRoles() {
  const users = await ajax('/users');
  const roles = await Promise.all(users.map(user => ajax(`/roles/${user.role_id}`)));
  console.log(roles);
}

getUsersWithRoles()
  .catch((err) => console.log(err.message));
