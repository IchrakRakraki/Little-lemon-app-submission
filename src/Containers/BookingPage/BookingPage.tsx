import { ColumnGrid } from "../../styles/StyledComponents";
import tableReservationImage from "../../assets/table-reservation.jpg";
import styled from "styled-components";
import { media } from "../../styles/Theme";
import ReservationSection from "./ReservationSection";
import ContactSection from "./ContactDetails";
import CTAButton from "../../Components/CTAButton";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { minMaxTime } from "../../utils/constants";

const Thumbnail = styled.img`
  width: 100%;
  height: 250px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  ${media.sm`
    grid-column: 1/-1;
  `}
  ${media.lg`
    grid-column: 2/-2;
  `}
  ${media.xl`
    grid-column: 3/-3;
  `}
  button {
    justify-self: center;
    ${media.sm`
        place-self: end;
  `};
  }
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

export const Subtitle = styled.h2`
  color: ${({ theme }) => theme.color.primary.dark};
`;

export const Container = styled.div<{ spacingValue?: "xs" | "md" }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, spacingValue = "md" }) => theme.spacing[spacingValue]};
`;

export const FlexContainer = styled.div<{ type?: "radio" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme, type }) => theme.spacing[type === "radio" ? "xs" : "sm"]};
  cursor: ${({ type }) => (type === "radio" ? "pointer" : "initial")};
  flex-wrap: wrap;
  &:last-child {
    justify-self: end;
  }
`;
type DateProp = Date | null;
export type DateType = DateProp | [DateProp, DateProp];

export type Reservation = {
  date: DateType;
  time: string;
  dinersCount: number;
  isSeatingIndoor: boolean;
};

const Booking = () => {
  const currentDate = new Date();
  const availableTime = new Date(currentDate.getTime() + 15 * 60000);
  const availableTimeString = availableTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const getDefaultTime = (): string => {
    const { min, max } = minMaxTime;
    if (availableTimeString < min) return min;
    if (availableTimeString > max) return max;
    return availableTimeString;
  };

  const [reservation, setReservation] = useState<Reservation>({
    date: new Date(),
    time: getDefaultTime(),
    dinersCount: 1,
    isSeatingIndoor: true,
  });

  return (
    <>
      <Thumbnail src={tableReservationImage} alt="Decorative restaurant table" />
      <ColumnGrid>
        <Title>Reserve a Table</Title>
        <StyledForm>
          <ReservationSection
            reservation={reservation}
            currentDate={currentDate}
            setReservation={setReservation}
          />
          <ContactSection />
          <CTAButton buttonText="Submit Reservation" type="submit" />
        </StyledForm>
      </ColumnGrid>
    </>
  );
};

export default Booking;
