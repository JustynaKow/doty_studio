import Contact from "../../constants";

export const footer = [
  {
    link: `tel:${Contact.PHONE}`,
    alt: `telefon`,
    description: `Zadzwoń do nas: ${Contact.PHONE}`,
  },
  {
    link: `mailto:${Contact.EMAIL}`,
    alt: `e-mail`,
    description: `${Contact.EMAIL}`,
  },
  {
    link: `${Contact.FACEBOOK}`,
    alt: `facebook`,
    description: `Facebook`,
  },
];
