import styled from "styled-components";
import { Container, FlexContainer, Subtitle, type DateType, type Reservation } from "./BookingPage";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { media } from "../../styles/Theme";
import { useEffect, useRef, useState, type Dispatch, type FC, type SetStateAction } from "react";
import { minMaxDiners, minMaxTime } from "../../utils/constants";

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
    transition: background-color 0.2s;
    abbr {
      color: ${({ theme }) => theme.color.primary.dark};
    }
    &:hover {
      background-color: ${({ theme }) => theme.color.highlight.light};
    }
    &:focus,
    :focus-visible {
      background-color: ${({ theme }) => theme.color.primary.dark};
      abbr {
        color: ${({ theme }) => theme.color.background};
      }
    }
  }
  .react-calendar__tile--now {
    background-color: ${({ theme }) => theme.color.highlight.light};
  }
  .react-calendar__tile--active {
    background-color: ${({ theme }) => theme.color.primary.light};
    &:focus,
    :focus-visible {
      background-color: ${({ theme }) => theme.color.primary.light};
      abbr {
        color: ${({ theme }) => theme.color.primary.dark};
      }
    }
  }
`;

const TimePicker = styled.input`
  border: 2px solid ${({ theme }) => theme.color.primary.dark};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  outline: none;
  transition: background-color 0.2s outline 0.2s;
  &:active {
    background-color: ${({ theme }) => theme.color.highlight.light};
  }
  &:focus,
  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.color.highlight.light};
  }
`;

const CounterIcon = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary.dark};
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing.xs};
  background: none;
  border: 2px solid ${({ theme }) => theme.color.primary.dark};
  outline: none;
  transition: background-color 0.4s outline 0.2s;
  &:enabled:hover {
    background-color: ${({ theme }) => theme.color.highlight.light};
  }
  &:active {
    background-color: ${({ theme }) => theme.color.highlight.light};
    transform: scale(0.95);
  }
  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.color.highlight.light};
  }
  &:disabled {
    pointer-events: none;
    cursor: not-allowed;
    color: ${({ theme }) => theme.color.highlight.light};
    border: 2px solid ${({ theme }) => theme.color.highlight.light};
  }
`;

const NumberDiners = styled.input`
  -webkit-appearance: none;
  -moz-appearance: textfield;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 2px solid ${({ theme }) => theme.color.primary.dark};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  width: 6ch;
  text-align: center;
  outline: none;
  transition: all 0.2s;
  &:focus,
  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.color.highlight.light};
  }
`;
const CustomRadioInput = styled.input`
  width: 20px;
  height: 20px;
  accent-color: ${({ theme }) => theme.color.primary.dark};
  cursor: pointer;
`;

type ReservationSectionProps = {
  reservation: Reservation;
  currentDate: Date;
  setReservation: Dispatch<SetStateAction<Reservation>>;
};
const ReservationSection: FC<ReservationSectionProps> = ({
  reservation,
  currentDate,
  setReservation,
}) => {
  const timeInputRef = useRef<HTMLInputElement>(null);
  const { date, time, dinersCount, isSeatingIndoor } = reservation;

  const maxReservationDate = new Date();
  maxReservationDate.setDate(currentDate.getDate() + 30);

  const handleDateChange = (value: DateType, event: { type: string }) => {
    if (Array.isArray(value)) return;
    console.log(event);
    setReservation(prev => ({ ...prev, date: value }));
    timeInputRef.current?.focus();
  };
  useEffect(() => {
    // Remove month label from keyboard navigation
    const calendarLabelBtn = document.querySelector(".react-calendar__navigation__label");
    calendarLabelBtn !== null && calendarLabelBtn.setAttribute("tab-index", "-1");
  }, []);

  return (
    <section id="bookingRsvDetails" aria-labelledby="reservation-details">
      <Subtitle id="reservation-details">Reservation details</Subtitle>
      <ReservationDetails>
        <Container aria-labelledby="date-label">
          <h3 id="date-label">Select date</h3>
          <CustomCalendar
            prev2Label={null}
            next2Label={null}
            minDate={currentDate}
            maxDate={maxReservationDate}
            view="month"
            value={date}
            onChange={handleDateChange}
          />
        </Container>
        <Container>
          <FlexContainer aria-labelledby="time-label">
            <h3 id="time-label">Select time</h3>
            <TimePicker
              ref={timeInputRef}
              aria-label="Time"
              type="time"
              min={minMaxTime.min}
              max={minMaxTime.max}
              required
              value={time}
              onChange={e => setReservation(prev => ({ ...prev, time: e.target.value }))}
            />
          </FlexContainer>

          <FlexContainer aria-labelledby="diners-label">
            <h3 id="diners-label">Select number of diners</h3>
            <FlexContainer>
              <CounterIcon
                type="button"
                disabled={dinersCount === minMaxDiners.min}
                aria-label="Reduce diners"
                onClick={() =>
                  setReservation(prev => ({ ...prev, dinersCount: prev.dinersCount - 1 }))
                }
              >
                <FontAwesomeIcon icon={faMinus} />
              </CounterIcon>
              <NumberDiners
                type="number"
                min={minMaxDiners.min}
                max={minMaxDiners.max}
                step="1"
                value={dinersCount}
                onChange={e =>
                  setReservation(prev => ({ ...prev, dinersCount: parseInt(e.target.value) }))
                }
              />
              <CounterIcon
                type="button"
                disabled={dinersCount === minMaxDiners.max}
                aria-label="Increase diners"
                onClick={() =>
                  setReservation(prev => ({ ...prev, dinersCount: prev.dinersCount + 1 }))
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </CounterIcon>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer aria-labelledby="seating-area-label">
            <h3 id="seating-area-label">Select seating area</h3>
            <FlexContainer>
              <FlexContainer>
                <CustomRadioInput
                  type="radio"
                  name="seating"
                  id="indoor"
                  checked={isSeatingIndoor}
                  onChange={() => setReservation(prev => ({ ...prev, isSeatingIndoor: true }))}
                />
                <label htmlFor="indoor"> Indoor</label>
              </FlexContainer>

              <FlexContainer>
                <CustomRadioInput
                  type="radio"
                  name="seating"
                  id="outdoor"
                  checked={!isSeatingIndoor}
                  onChange={() => setReservation(prev => ({ ...prev, isSeatingIndoor: false }))}
                />
                <label htmlFor="outdoor">Outdoor</label>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </Container>
      </ReservationDetails>
    </section>
  );
};

export default ReservationSection;
