import {
  Wrapper,
  Object,
  Hyperlink,
  StyledLink,
  Container,
  Element,
} from "./styled";
import { footer } from "./footer";

const Footer = () => {
  const scrollToUp = () => window.scrollTo({ top: 0 });

  return (
    <Wrapper id="kontakt">
      <Object>
        {footer.map(({ link, alt, description }) => (
          <Element key={alt}>
            <Hyperlink href={link}>{description}</Hyperlink>
          </Element>
        ))}
      </Object>
      <Container>
        <StyledLink to="/polityka-prywatności" onClick={scrollToUp}>
          Polityka Prywatności
        </StyledLink>
      </Container>
    </Wrapper>
  );
};

export default Footer;
