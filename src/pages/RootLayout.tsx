import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";

const RootLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
