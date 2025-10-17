import styled from "styled-components";
import { Container, Subtitle } from "./BookingPage";
import { media } from "../../styles/Theme";

const ContactDetails = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.lg};
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

const ContactSection = () => {
  return (
    <section id="bookingContactDetails" aria-labelledby="contact-info">
      <Subtitle>Contact Information</Subtitle>
      <ContactDetails>
        <Container>
          <Container spacingValue="xs">
            <label htmlFor="firstName">First Name</label>
            <CustomInput type="text" name="firstName" />
          </Container>
          <Container spacingValue="xs">
            <label htmlFor="lastName">Last Name</label>
            <CustomInput type="text" name="lastName" />
          </Container>
          <Container spacingValue="xs">
            <label htmlFor="email">Email Address</label>
            <CustomInput type="email" name="email" />
          </Container>
        </Container>
      </ContactDetails>
    </section>
  );
};

export default ContactSection;
