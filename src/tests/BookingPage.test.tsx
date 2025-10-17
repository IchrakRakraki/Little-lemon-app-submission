import { render, screen } from "@testing-library/react";
import BookingPage, { initializeTimes, updateTimes } from "../Containers/BookingPage/BookingPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";

describe("BookingPage Component", () => {
  it("renders the booking page heading", () => {
    render(
      <ThemeProvider theme={theme}>
        <BookingPage />
      </ThemeProvider>,
    );
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });

  it("returns the correct state from initializeTimes", () => {
    const initialState = initializeTimes();
    expect(initialState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });
  it("renders updated times using updateTimes", () => {
    const initialState = initializeTimes();
    const newState = updateTimes("27/10/2025");
    expect(newState).toEqual(initialState);
  });
});
