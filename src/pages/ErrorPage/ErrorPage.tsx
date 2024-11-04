import {
  ErrorWrapper,
  ErrorImage,
  ErrorBold,
  ErrorText,
} from "./Errorpage.styles";
import Button from "../../components/common/button/Button";
import errorImage from "../../assets/error/404.svg";

const ErrorPage = () => {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <ErrorWrapper>
      <ErrorImage src={errorImage} />
      <ErrorText>
        <ErrorBold>찾으시는 페이지가 없어요.</ErrorBold>
        <br />
        요청하신 페이지를 찾을 수 없습니다. <br />
        홈으로 돌아가거나 다시 시도해주세요.
      </ErrorText>
      <Button
        label="메인화면으로"
        buttonType="fill"
        buttonSize="medium"
        onClick={handleClick}
      />
    </ErrorWrapper>
  );
};

export default ErrorPage;
