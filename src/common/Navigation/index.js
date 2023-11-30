import { useState, useEffect } from "react";
import { StyledNavigation } from "./styled";
import { StyleSheetManager } from "styled-components";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "scrolled"}>
      <StyledNavigation scrolled={scrolled}>
        DOTY STUDIO by Aneta Paszkowska
      </StyledNavigation>
    </StyleSheetManager>
  );
};

export default Navigation;
