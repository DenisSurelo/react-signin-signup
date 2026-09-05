import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUser } from '../../redux/authOps';
import { selectToken } from '../../redux/authSelectors';

import SharedLayout from "../Auth/SharedLayout";
import PrivateRoute from '../Auth/PrivateRoute';

import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import ContactsPage from '../../pages/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<Navigate to="/contacts" replace />}
          />

          <Route
            path="register"
            element={<RegisterPage />}
          />

          <Route
            path="login"
            element={<LoginPage />}
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/contacts" replace />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;

