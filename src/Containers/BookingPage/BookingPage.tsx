import React from "react";
import { ColumnGrid } from "../../styles/StyledComponents";
import tableReservationImage from "../../assets/table-reservation.jpg";
import styled from "styled-components";
import { media } from "../../styles/Theme";
import ReservationSection from "./ReservationSection";
import ContactSection from "./ContactDetails";
import CTAButton from "../../Components/CTAButton";
import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeTimes, updateTimes } from "../../utils/bookingUtils";

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
  & > button {
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

export const Container = styled.div<{ $spacingValue?: "xs" | "md" }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $spacingValue = "md" }) => theme.spacing[$spacingValue]};
`;

export const FlexContainer = styled.div<{ type?: "radio"; $justifyChildEnd?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme, type }) => theme.spacing[type === "radio" ? "xs" : "sm"]};
  cursor: ${({ type }) => (type === "radio" ? "pointer" : "initial")};
  flex-wrap: wrap;
  & > div:last-child {
    margin-left: ${({ $justifyChildEnd }) => ($justifyChildEnd ? "auto" : 0)};
  }
`;

declare function submitAPI(formData: object): boolean;

type DateProp = Date | null;
export type DateType = DateProp | [DateProp, DateProp];
export type OccasionType = "Birthday" | "Anniversary";
export type Reservation = {
  date: DateType;
  time: string;
  dinersCount: number;
  isSeatingIndoor: boolean;
  occasion: OccasionType;
};
export type Contact = {
  firstName: string;
  lastName: string;
  email: string;
};
export type TimesAction = { type: "UPDATE_TIMES"; date: DateType };

const BookingPage = () => {
  const timesReducer = (state: string[], action: TimesAction) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return updateTimes(action.date);
      default:
        return state;
    }
  };
  const [availableTimes, dispatchTimes] = useReducer(timesReducer, [], initializeTimes);

  const [reservation, setReservation] = useState<Reservation>({
    date: new Date(),
    time: "",
    dinersCount: 1,
    isSeatingIndoor: true,
    occasion: "Birthday",
  });
  const [contact, setContact] = useState<Contact>({ firstName: "", lastName: "", email: "" });
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    const isSuccessful = submitAPI({ ...reservation, ...contact });
    if (isSuccessful) navigate("/confirmation");
  };
  return (
    <>
      <Thumbnail src={tableReservationImage} alt="Decorative restaurant table" />
      <ColumnGrid>
        <Title>Reserve a Table</Title>
        <StyledForm>
          <ReservationSection
            reservation={reservation}
            currentDate={new Date()}
            setReservation={setReservation}
            availableTimes={availableTimes}
            dispatchTimes={dispatchTimes}
          />
          <ContactSection contact={contact} setContact={setContact} />
          <CTAButton buttonText="Submit Reservation" type="submit" onClick={handleSubmitForm} />
        </StyledForm>
      </ColumnGrid>
    </>
  );
};

export default BookingPage;
