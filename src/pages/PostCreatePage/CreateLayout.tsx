import { Outlet } from "react-router-dom";

const CreateLayout = () => {
  return (
    <div>
      포스트 작성 레이아웃
      <Outlet />
    </div>
  );
};

export default CreateLayout;
