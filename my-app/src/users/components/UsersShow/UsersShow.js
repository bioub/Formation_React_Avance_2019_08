import React from 'react';
import { CircularProgress } from '@material-ui/core';

export function UsersShow({ user, loading }) {
  return (
    <div className="UsersShow">
      {loading && <CircularProgress />}
      {!loading && user && (
        <>
          <h2>{user.name}</h2>
          <h3>Phone</h3>
          <p>{user.phone}</p>
          <h3>Email</h3>
          <p>{user.email}</p>
          <h3>Address</h3>
          <p>
            {user.address.street}
            <br />
            {user.address.city}
            {user.address.zipcode}
          </p>
        </>
      )}
    </div>
  );
}
