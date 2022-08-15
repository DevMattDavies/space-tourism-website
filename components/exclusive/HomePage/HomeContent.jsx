import styled from "styled-components";

const TextStyle = styled.p`
  color: var(--secondary);
  font-family: var(--font-primary);
  font-size: var(--font-size-text-content);
  line-height: 2.2rem;
  text-align: center;
  margin-top: 2rem;
  font-weight: 300;
`;

function TextContent() {
  return (
    <TextStyle>
      {`Let's face it; if you want to go to space, you might as well genuinely go
      to outer space and not hover kind of on the edge of it. Well sit back, and
      relax because we'll give you a truly out of this world experience!`}
    </TextStyle>
  );
}

export default TextContent;
