import { Wrapper, Card, Object, Link, Media, Title, Icon } from "./styled";
import card from "../../images/card.jpg";
import Contact from "../../constants";
import facebook from "./../../images/facebook-svgrepo-com.svg";
import instagram from "./../../images/instagram-svgrepo-com.svg";

const Footer = () => (
  <Wrapper>
    <Card src={card} />
    <Object>
      <Link
        href="https://maps.app.goo.gl/pLEFrqsMtuaue6Th8"
        target="_blank"
        rel="noreferrer noopener"
      >
        Leszczynowa 39F, <br /> 15-523 Grabówka (gm. Supraśl)
      </Link>
      <Link href={`tel:${Contact.PHONE}`}>tel. 534 870 820</Link>
      <Link href={`mailto:${Contact.EMAIL}`}>{Contact.EMAIL}</Link>
      NIP 9662182743 | REGON 526467908
    </Object>
    <Media>
      <Title>SOCIAL MEDIA:</Title>
      <div>
        <Link
          href={`${Contact.FACEBOOK}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon src={facebook} alt="Facebook" />
        </Link>
        <Link
          href={`${Contact.INSTAGRAM}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon src={instagram} alt="Instagram" />
        </Link>
      </div>
    </Media>
  </Wrapper>
);

export default Footer;
