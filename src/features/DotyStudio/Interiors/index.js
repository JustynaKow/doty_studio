import {
  StyledInteriors,
  Heading,
  Wrapper,
  Element,
  Container,
  Subtitle,
  Title,
  Subheading,
  Paragraph,
  Image
} from "./styled";
import { interiors } from "./inderiors";

const Interiors = () => (
  <StyledInteriors>
    <Heading>PROJEKT WNĘTRZ</Heading>
    <Subheading>DOPASOWANY DO TWOICH POTRZEB</Subheading>
    <Wrapper>
      {interiors.map(({ imgSrc, subtitle, title, url }) => (
        <Element key={title}>
          <Container>
            <Image src={imgSrc} width="348px" height="260px" alt={subtitle} />
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Container>
        </Element>
      ))}
    </Wrapper>
    <Paragraph>
      WYCENĘ PROJEKTU TWORZYMY INDYWIDUALNIE DO KAŻDEGO WNĘTRZA.{" "}
    </Paragraph>
    <Paragraph>
      WYŚLIJ WYMIARY POMIESZCZEŃ, A MY PRZYGOTUJEMY OFERTĘ SPECJALNIE DLA
      CIEBIE.
    </Paragraph>
  </StyledInteriors>
);

export default Interiors;
