import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";

const RootLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
