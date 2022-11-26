import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IUser } from "../../types/User";

import { Author } from ".";

const author: IUser = {
  id: 10,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "92893822",
  address: {
    city: "Gotham City",
  },
};

describe("Component Post", () => {
  it("should render correctly", () => {
    render(<Author data={author} />);

    const authorLabel = screen.getByText(/author:/i);
    const authorName = screen.getByText(/john doe/i);

    expect(authorLabel).toBeInTheDocument();
    expect(authorName).toBeInTheDocument();
  });

  it("should be not display the author's card", () => {
    render(<Author data={author} />);

    const authorLink = screen.getByRole("link", {
      name: /Author:/i,
    });

    expect(authorLink).toHaveAttribute(
      "data-state",
      "closed"
    );
  });

  it("should be open the author information card", () => {
    render(<Author data={author} />);

    const authorLink = screen.getByRole("link", {
      name: /Author:/i,
    });

    authorLink.setAttribute("data-state", "open");

    expect(authorLink).toHaveAttribute(
      "data-state",
      "open"
    );
  });
});
