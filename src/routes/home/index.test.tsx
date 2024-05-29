import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import Home from ".";

test("renders home page", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  const title = screen.getByText(/Little Lemon/i);
  const subtitle = screen.getByText(/Chicago/i);

  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});
