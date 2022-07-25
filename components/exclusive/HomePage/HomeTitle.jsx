import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`;

const Subtitle = styled.h2`
  color: var(--secondary);
  font-size: var(--font-size-heading-5);
  text-transform: uppercase;
  font-family: var(--font-secondary);
  letter-spacing: var(--font-space-nav-text);
  font-weight: 400;
`;

const MainTitle = styled.h1`
  color: var(--highlight);
  font-size: var(--font-size-heading-1);
  text-transform: uppercase;
  font-family: var(--font-title);
  font-weight: 300;
`;

function Title() {
  return (
    <TitleContainer>
      <Subtitle>So, you want to travel to</Subtitle>
      <MainTitle>Space</MainTitle>
    </TitleContainer>
  );
}

export default Title;
