import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { refreshUser } from '../../redux/authSlice';

import Navigation from '../Auth/Navigation';
import AuthMenu from '../Auth/AuthMenu';
import PrivateRoute from '../Auth/PrivateRoute';

import RegisterPage from '../../pages/RegisterPage';
import LoginPage from '../../pages/LoginPage';
import ContactsPage from '../../pages/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  const { token, isRefreshing } = useSelector(state => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
  }, [dispatch, token]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Navigation />
        <AuthMenu />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" />} />

          <Route path="/register" element={<RegisterPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/contacts" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;