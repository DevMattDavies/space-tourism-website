import styled from "styled-components";
import {
  ContentContainer,
  PageOverlay,
} from "../../universal/Containers.styles";
import Background from "./HomeBackground";
import Navbar from "../Navbar/Navbar";
import Title from "./HomeTitle";
import TextContent from "./HomeContent";

function HomePage() {
  return (
    <>
      <Background />
      <PageOverlay>
        <Navbar />
        <ContentContainer>
          <Title />
          <TextContent />
        </ContentContainer>
      </PageOverlay>
    </>
  );
}

export default HomePage;
