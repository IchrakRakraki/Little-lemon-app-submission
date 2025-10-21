import { render, screen } from "@testing-library/react";
import BookingPage from "../Containers/BookingPage/BookingPage";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/Theme";
import { describe, it, expect } from "vitest";
import { initializeTimes, updateTimes } from "../utils/bookingUtils";
import { fetchAPI, submitAPI } from "../utils/api.js";

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

  // it("returns the correct state from initializeTimes", () => {
  //   const result = initializeTimes();
  //   expect(result).not.toHaveLength(0);
  // });
  // it("renders updated times using updateTimes", () => {
  //   updateTimes(new Date());
  //   expect().toHaveBeenCalled();
  // });
});
