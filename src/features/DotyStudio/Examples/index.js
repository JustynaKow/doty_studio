import {
  StyledExamples,
  Heading,
  Wrapper,
  Element,
  Container,
  Subtitle,
  Title,
  Link,
  Arrow,
} from "./styled";
import { examples } from "./examples";

const Examples = () => (
  <StyledExamples>
    <Heading>DESIGN OF THE YEAR</Heading>
    <Wrapper>
      {examples.map(({ imgSrc, subtitle, title, url }) => (
        <Element key={title}>
          <Container>
            <Link href={url} target="_blank" rel="noreferrer noopener">
              <img src={imgSrc} width="348px" alt={subtitle} />
            </Link>
            <Subtitle>{subtitle}</Subtitle>
            <Title>{title}</Title>
          </Container>
          <Link href={url} target="_blank" rel="noreferrer noopener">
            <Arrow>→</Arrow>
          </Link>
        </Element>
      ))}
    </Wrapper>
  </StyledExamples>
);

export default Examples;
