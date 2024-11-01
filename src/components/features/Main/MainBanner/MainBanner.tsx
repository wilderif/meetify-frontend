import {
  BannerContainer,
  StyledBanner,
  ContentWrapper,
  BannerContent,
  MainText,
  SubText,
  HighlightedLogo,
  HighlightedText,
} from "./MainBanner.styles";
import BannerIcon from "../../../common/icon/BannerIcon/BannerIcon";
import Button from "../../../common/button/Button";

const MainBanner = () => {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <BannerContainer>
      <StyledBanner>
        <ContentWrapper>
          <BannerContent>
            <MainText>
              꿈을 현실로 만들 출발점, <br />
              <HighlightedLogo> Meetify </HighlightedLogo> 에서!
            </MainText>
            <Button label='등록하기' onClick={handleClick} />
          </BannerContent>
          <BannerIcon />
        </ContentWrapper>
      </StyledBanner>
      <SubText>
        지금 <HighlightedText>Meet</HighlightedText> 메뉴로 이동해, 함께할
        최고의 팀원을 찾아보세요!
      </SubText>
    </BannerContainer>
  );
};

export default MainBanner;
