import { Container, TextWrapper, Title, Letter } from "./LoadingSpinner.styled";

const letters = ["M", "E", "E", "T", "I", "F", "Y"];

const LoadingSpinner = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>
          {letters.map((letter, index) => (
            <Letter key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              {letter}
            </Letter>
          ))}
        </Title>
      </TextWrapper>
    </Container>
  );
};

export default LoadingSpinner;
