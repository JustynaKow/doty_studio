import {
  StyledOffer,
  Wrapper,
  Element,
  Images,
  Title,
  Subtitle,
} from "./styled";
import { offer } from "./offer";

const Offer = () => (
  <StyledOffer>
    <Title>OFERTA</Title>
    <Wrapper>
      {offer.map(({ imgSrc, title }) => (
        <Element key={title}>
              <Images src={imgSrc} alt={title} />
            <Subtitle>{title}</Subtitle>
        </Element>
      ))}
    </Wrapper>
  </StyledOffer>
);

export default Offer;
