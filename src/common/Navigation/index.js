import { useState, useEffect } from "react";
import { StyledNavigation } from "./styled";

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
    <StyledNavigation scrolled={scrolled}>
      DOTY STUDIO by Aneta Paszkowska
    </StyledNavigation>
  );
};

export default Navigation;
