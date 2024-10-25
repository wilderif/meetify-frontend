import { Outlet } from "react-router-dom";

const UpdateLayout = () => {
  return (
    <div>
      포스트 수정 레이아웃
      <Outlet />
    </div>
  );
};

export default UpdateLayout;
