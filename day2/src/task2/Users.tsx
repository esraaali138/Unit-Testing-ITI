import React, { useEffect, useState } from 'react'; 

import { fetchUsers, User } from '../../api/users';

export default function Users() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState('');


  useEffect(() => {
    fetchUsers()
      .then(users => {
        setUsers(users);
      })
      .catch(() => {
        setError('Something went wrong');
      });
  }, []);

  if (!users?.length) return <p>No users available</p>;
  if (error) return <div role="alert">{error}</div>;

  return (
    <div style={{ maxWidth: 600 }}>
      {users?.map(user => (
        <div key={user.id}>
          <p>{user.id}</p>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.city}</p>
        </div>
      ))}
    </div>
  );
}
