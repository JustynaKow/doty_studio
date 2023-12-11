import { StyledAboutUs, Wrapper, Title, Container, Paragraph } from "./styled";

const AboutUs = () => (
  <StyledAboutUs>
    <Wrapper>
      <Title>O NAS</Title>
      <p>DOTY Studio by Aneta Paszkowska</p>
    </Wrapper>
    <Container>
      <Paragraph>
        Nazywam się <strong>Aneta Paszkowska</strong>. Posiadam tytuł inżyniera
        architektury wnętrz po ukończeniu Politechniki Białostockiej oraz dyplom
        dekoratora wnętrz. Dzięki czynnemu zaangażowaniu w projekty na uczelni
        oraz pracę w zawodzie już w trakcie studiów moja wiedza nie jest tylko
        teorią.
      </Paragraph>
      <Paragraph>
        Planuję stworzyć zespół, który przygotuje i zrealizuje wszystkie
        projekty. Chciałabym, aby piękno było dostępne dla każdego, kto chce się
        nim otaczać.
      </Paragraph>
    </Container>
  </StyledAboutUs>
);

export default AboutUs;
