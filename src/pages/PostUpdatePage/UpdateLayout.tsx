import { Outlet } from "react-router-dom";
import { Container, Content } from "./UpdateLayout.styles";
const UpdateLayout = () => {
  return (
    <Container>
      <Content>
        <Outlet /> {/* 중첩된 자식 컴포넌트가 여기에서 렌더링됨 */}
      </Content>
    </Container>
  );
};

export default UpdateLayout;
