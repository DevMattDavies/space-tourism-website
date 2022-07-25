import styled from "styled-components";
import Image from "next/image";
import Logo from "./Logo";
import BurgerIcon from "./BurgerIcon";
import CloseIcon from "./CloseIcon";
import { useState } from "react";
import NavModal from "./NavbarMobileModal";

const NavMobileStyle = styled.div`
  min-width: 100vw;
  height: 10vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 3rem 2rem;
`;

function NavbarMobile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModalHandler() {
    setIsModalOpen(true);
  }

  function closeModalHandler() {
    setIsModalOpen(false);
  }

  return (
    <NavMobileStyle>
      <Logo />
      {isModalOpen ? (
        <CloseIcon closeModalHandler={closeModalHandler} />
      ) : (
        <BurgerIcon openModalHandler={openModalHandler} />
      )}
      {isModalOpen && <NavModal />}
    </NavMobileStyle>
  );
}

export default NavbarMobile;
