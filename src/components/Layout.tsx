import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <div className="pattern" />
      <header className="py-10">
        <div className="wrapper"></div>
        <img width={90} src="/logo.png" alt="logo image" />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
