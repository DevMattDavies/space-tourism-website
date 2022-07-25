import styled from "styled-components";
import Image from "next/image";
import Burger from "../../../assets/shared/icon-hamburger.svg";
import { NavbarIconContainer } from "../../universal/Containers.styles";

function BurgerIcon({openModalHandler}) {
  return (
    <NavbarIconContainer>
      <Image src={Burger} onClick={openModalHandler}></Image>
    </NavbarIconContainer>
  );
}

export default BurgerIcon;
