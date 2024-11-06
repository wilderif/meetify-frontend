import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header/Header";

const RootLayout = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isChatPage = location.pathname === "/chats";

  return (
    <>
      <header>
        <Header isMainPage={isMainPage} isChatPage={isChatPage} />
      </header>
      <main className={isMainPage ? "no-padding" : ""}>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
