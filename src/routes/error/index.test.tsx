import React from "react";
import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import Error from ".";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useRouteError: () => ({ statusText: "" }),
}));

test("renders error page", () => {
  render(
    <MemoryRouter>
      <Error />
    </MemoryRouter>
  );
  const title = screen.getByText(/Oops!/i);
  const subtitle = screen.getByText(/Sorry, an unexpected error has occurred/i);

  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});
