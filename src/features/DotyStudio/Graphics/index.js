import {
  StyledGraphic,
  Heading,
  Wrapper,
  Element,
  Container,
  Title,
  Paragraph,
} from "./styled";
import { graphic } from "./graphic";

const Graphic = () => (
  <StyledGraphic>
    <Heading>PROJEKTOWANIE GRAFICZNE</Heading>
    <Paragraph>
      TWORZYMY indywidualne projekty dopasowane do potrzeb klienta.
    </Paragraph>
    <Paragraph>Skontaktuj się z nami i poznaj szczegóły oferty.</Paragraph>
    <Wrapper>
      {graphic.map(({ title, items }) => (
        <Element key={title}>
          <Container>
            <Title>{title}</Title>
            <ul>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </Container>
        </Element>
      ))}
    </Wrapper>
  </StyledGraphic>
);

export default Graphic;
