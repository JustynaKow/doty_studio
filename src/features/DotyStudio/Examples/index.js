import {
  StyledExamples,
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
    <h2>DESIGN OF THE YEAR</h2>
    <Wrapper>
      {examples.map(({ imgSrc, subtitle, title, url }) => (
        <Element key={title}>
          <Container>
            <img src={imgSrc} width="348px" alt={title} />
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
