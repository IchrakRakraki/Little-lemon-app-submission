import styled from "styled-components";
import { Container, CustomSection, FlexContainer, Subtitle } from "./BookingPage";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { media } from "../../styles/Theme";

const ReservationDetails = styled.div`
  ${({ theme }) => media.sm`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: ${theme.spacing.lg}
  `}
`;

const CustomCalendar = styled(Calendar)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border: none;
  font-family: ${({ theme }) => theme.font.primary};
  text-decoration: none;

  button:enabled {
    cursor: pointer;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  button:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.color.mutedText};
    opacity: 0.5;
  }
  .react-calendar__navigation button {
    color: ${({ theme }) => theme.color.primary.dark};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
  .react-calendar__navigation__label {
    pointer-events: none;
    cursor: default;
  }
  button.react-calendar__navigation__arrow {
    font-size: ${({ theme }) => theme.fontSize.mdPlus};
  }
  abbr {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary.dark};
  }
  .react-calendar__tile {
    abbr {
      color: ${({ theme }) => theme.color.primary.dark};
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.highlight.light};
    }
    &:focus,
    :focus-visible {
      background-color: ${({ theme }) => theme.color.primary.light};
    }
  }
  .react-calendar__tile--now {
    background-color: ${({ theme }) => theme.color.highlight.light};
  }
  .react-calendar__tile--active {
    background-color: ${({ theme }) => theme.color.primary.light};
  }
`;

const ReservationSection = () => {
  const currentDate = new Date();
  const maxReservationDate = new Date();
  maxReservationDate.setDate(currentDate.getDate() + 30);
  const availableTime = new Date(currentDate.getTime() + 15 * 60000);
  return (
    <CustomSection id="bookingRsvDetails" aria-labelledby="reservation-details">
      <Subtitle>Reservation details</Subtitle>
      <ReservationDetails>
        <Container>
          <h3>Select date</h3>
          <CustomCalendar
            prev2Label={null}
            next2Label={null}
            minDate={currentDate}
            maxDate={maxReservationDate}
            view="month"
          />
        </Container>
        <Container>
          <FlexContainer>
            <h3>Select time</h3>
            <input
              aria-label="Time"
              type="time"
              min="12:00"
              max="22:00"
              required
              value={availableTime.toLocaleTimeString("it-IT", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            />
          </FlexContainer>

          <FlexContainer>
            <h3>Select number of diners</h3>
            <FlexContainer>
              <FontAwesomeIcon icon={faSquareMinus} />
              <span>1</span>
              <FontAwesomeIcon icon={faSquarePlus} />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer>
            <h3>Select seating area</h3>
            <FlexContainer>
              <input type="radio" name="indoor" checked defaultChecked />
              <label htmlFor="indoor"> Indoor</label>

              <input type="radio" name="outdoor" checked={false} />
              <label htmlFor="outdoor">Outdoor</label>
            </FlexContainer>
          </FlexContainer>
        </Container>
      </ReservationDetails>
    </CustomSection>
  );
};

export default ReservationSection;
