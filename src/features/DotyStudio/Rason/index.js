import { StyledReason, Container } from "./styled";
import { reason } from "./reason";

const Reason = () => (
  <StyledReason>
    {reason.map(({ title, description }) => (
      <Container key={title}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Container>
    ))}
  </StyledReason>
);

export default Reason;
