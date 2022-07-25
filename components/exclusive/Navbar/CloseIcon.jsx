import styled from "styled-components";
import Image from "next/image";
import Close from "../../../assets/shared/icon-close.svg";
import { NavbarIconContainer } from "../../universal/Containers.styles";

function CloseIcon({ closeModalHandler }) {
  return (
    <NavbarIconContainer>
      <Image src={Close} onClick={closeModalHandler}></Image>
    </NavbarIconContainer>
  );
}

export default CloseIcon;
