import { Container, TextWrapper, Title, Letter } from "./LoadingSpinner.styled";

const letters = ["L", "O", "A", "D", "I", "N", "G"];

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
