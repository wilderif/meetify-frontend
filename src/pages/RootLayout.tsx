import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
