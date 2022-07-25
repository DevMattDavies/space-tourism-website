import styled from "styled-components";
import Image from "next/image";
import SiteLogo from "../../../assets/shared/logo.svg";
import { NavbarIconContainer } from "../../universal/Containers.styles";

function Logo() {
  return (
    <NavbarIconContainer>
      <Image src={SiteLogo} layout='fill' />
    </NavbarIconContainer>
  );
}

export default Logo;
