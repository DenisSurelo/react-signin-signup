import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '@redux/authSlice';

const AuthMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user?.email);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
      {email && <p>{email}</p>}

      {email && (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};

export default AuthMenu;
