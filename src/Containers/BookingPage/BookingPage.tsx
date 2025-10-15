import { ColumnGrid } from "../../styles/StyledComponents";
import tableReservationImage from "../../assets/table-reservation.jpg";
import styled from "styled-components";
import { media } from "../../styles/Theme";
import ReservationSection from "./ReservationSection";
import ContactSection from "./ContactDetails";

const Thumbnail = styled.img`
  width: 100%;
  height: 250px;
`;
const Title = styled.h1`
  padding-top: ${({ theme }) => theme.spacing.xl};
  ${media.sm`
    grid-column: 1/-1;
  `}
  ${media.lg`
    grid-column: 2/-2;
  `}
  ${media.xl`
    grid-column: 3/-3;
  `}
`;

export const CustomSection = styled.section`
  ${media.sm`
    grid-column: 1/-1;
  `}
  ${media.lg`
    grid-column: 2/-2;
  `}
  ${media.xl`
    grid-column: 3/-3;
  `}
`;
export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.color.primary.dark};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Booking = () => {
  return (
    <>
      <Thumbnail
        src={tableReservationImage}
        alt="
      Decorative restaurant table"
      />
      <ColumnGrid>
        <Title>Reserve a Table</Title>
        <ReservationSection />
        <ContactSection />
      </ColumnGrid>
    </>
  );
};

export default Booking;
