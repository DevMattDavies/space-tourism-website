import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import IMAGES from "../../../assets/home/index";

const BackgroundImage = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: block;
  z-index: 0;
`;

function Background() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <>
      <BackgroundImage>
        {width >= 800 && (
          <Image
            src={IMAGES.backgroundDesktop}
            layout="fill"
            unoptimized={true}
          ></Image>
        )}
        {width >= 400 && width < 799 && (
          <Image
            src={IMAGES.backgroundTablet}
            layout="fill"
            unoptimized={true}
          ></Image>
        )}
        {width >= 0 && width < 399 && (
          <Image
            src={IMAGES.backgroundMobile}
            layout="fill"
            unoptimized={true}
          ></Image>
        )}
      </BackgroundImage>
    </>
  );
}

export default Background;
