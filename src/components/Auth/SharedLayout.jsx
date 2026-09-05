import { Outlet } from 'react-router';

import Navigation from './Auth/Navigation';
import AuthMenu from './Auth/AuthMenu';

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