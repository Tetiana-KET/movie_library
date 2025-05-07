import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <>
      <div className="pattern" />
      <header className="py-6">
        <div className="wrapper"></div>
        <img width={70} height={55} src="/logo.png" alt="logo image" loading="eager" />
      </header>
      <main className="flex-1 px-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
