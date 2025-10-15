import styled from "styled-components";
import CTAButton from "../../Components/CTAButton";
import { Container, CustomSection, Subtitle } from "./BookingPage";

const CustomForm = styled.form``;

const ContactSection = () => {
  return (
    <CustomSection id="bookingContactDetails" aria-labelledby="contact-info">
      <Subtitle>Contact Information</Subtitle>
      <CustomForm>
        <Container>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" />

          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" />
        </Container>

        <CTAButton buttonText="Submit Reservation" type="sumbit" />
      </CustomForm>
    </CustomSection>
  );
};

export default ContactSection;
