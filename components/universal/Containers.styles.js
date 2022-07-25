import styled from "styled-components";


// General page layouts
export const PageOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  width: 85%;
`

// Navbar icon layout
export const NavbarIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;