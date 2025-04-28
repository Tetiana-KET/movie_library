import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <div className="pattern" />
      <header className="py-10">
        <div className="wrapper"></div>
        <img width={90} height={65} src="/logo.png" alt="logo image" loading="eager" />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
