import { Outlet } from "react-router-dom";
import { Container, Content } from "./CreateLayout.styles";

const CreateLayout: React.FC = () => {
  return (
    <Container>
      <Content>
        <Outlet /> {/* 중첩된 자식 컴포넌트가 여기에서 렌더링됨 */}
      </Content>
    </Container>
  );
};

export default CreateLayout;
