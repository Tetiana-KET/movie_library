import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { ButtonWithArrow } from './ui/ButtonWithArrow';
import { scrollToTop } from '@/utils/scrollToTop';
import { useShowTopButton } from '@/hooks/useShowTopButton';

export const Layout = () => {
  const { showScrollButton } = useShowTopButton();
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
      <ButtonWithArrow
        onClick={scrollToTop}
        className={`button button-top ${showScrollButton ? 'button-top__visible' : ''}`}
      />
    </>
  );
};
