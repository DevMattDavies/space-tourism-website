import Image from "next/image";
import styled from "styled-components";

const ModalStyles = styled.div`
  position: fixed;
  z-index: 0;
  width: 60vw;
  height: 100vh;
  top: 0;
  right: 0;
  backdrop-filter: blur(30px);
`;

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 15vh;
  margin-left: 3rem;
  color: var(--highlight);
  font-family: var(--font-secondary);
`;

const NavRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NavNumber = styled.span`
  font-weight: 700;
  font-size: var(--font-size-heading-5);
`;

const NavItem = styled.p`
  font-size: var(--font-size-heading-5);
`;

function NavModal() {
  return (
    <ModalStyles>
      <ModalContentContainer>
        <NavRow>
          <NavNumber>00</NavNumber>
          <NavItem>HOME</NavItem>
        </NavRow>
        <NavRow>
          <NavNumber>01</NavNumber>
          <NavItem>DESTINATION</NavItem>
        </NavRow>
        <NavRow>
          <NavNumber>02</NavNumber>
          <NavItem>CREW</NavItem>
        </NavRow>
        <NavRow>
          <NavNumber>03</NavNumber>
          <NavItem>TECHNOLOGY</NavItem>
        </NavRow>
      </ModalContentContainer>
    </ModalStyles>
  );
}

export default NavModal;
