import styled from "styled-components";
import { Container, Subtitle, type Contact } from "./BookingPage";
import { media } from "../../styles/Theme";
import type { Dispatch, FC, SetStateAction } from "react";

const ContactDetails = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.xl};
  ${media.sm`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 1fr auto;
  `};
`;
const CustomInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.color.primary.dark};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.color.text};
  outline: none;
  transition: all 0.2s;
  &::placeholder {
    color: ${({ theme }) => theme.color.mutedText};
  }
  &:focus,
  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.color.highlight.light};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.highlight.light};
  }
`;
type ContactSectionProps = {
  contact: Contact;
  setContact: Dispatch<SetStateAction<Contact>>;
};
const ContactSection: FC<ContactSectionProps> = ({ contact, setContact }) => {
  const { firstName, lastName, email } = contact;
  const handleTextField = (event: { target: { name: string; value: string } }) => {
    const { name, value } = event.target;
    setContact(prev => ({ ...prev, [name]: value }));
  };
  return (
    <section id="bookingContactDetails" aria-labelledby="contact-info">
      <Subtitle>Contact Information</Subtitle>
      <ContactDetails>
        <Container>
          <Container $spacingValue="xs">
            <label htmlFor="firstName">
              <h3>First Name *</h3>
            </label>
            <CustomInput
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleTextField}
              required
            />
          </Container>
          <Container $spacingValue="xs">
            <label htmlFor="lastName">
              <h3>Last Name *</h3>
            </label>
            <CustomInput
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleTextField}
              required
            />
          </Container>
          <Container $spacingValue="xs">
            <label htmlFor="email">
              <h3>Email Address *</h3>
            </label>
            <CustomInput
              type="email"
              name="email"
              value={email}
              onChange={handleTextField}
              required
            />
          </Container>
        </Container>
      </ContactDetails>
    </section>
  );
};

export default ContactSection;
