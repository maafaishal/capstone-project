import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import Reservation from ".";

test("renders Reservation page", () => {
  render(
    <MemoryRouter>
      <Reservation />
    </MemoryRouter>
  );
  const dateLabel = screen.getByText(/Date:/i);
  const timeLabel = screen.getByText(/Time:/i);

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
});
