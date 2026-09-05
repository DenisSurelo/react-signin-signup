import { Outlet } from 'react-router';

import Navigation from './Navigation';
import AuthMenu from './AuthMenu';
const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
        <AuthMenu />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;