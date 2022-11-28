import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../../pages";

describe("Component Home Page", () => {
  it("should render correctly", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /confira as últimas novidades da btix/i,
    });

    const textInformation = screen.getByText(
      /nosso blog é atualizado toda semana/i
    );

    const postsLink = screen.getByRole("link", {
      name: /ver posts/i,
    });

    expect(heading).toBeInTheDocument();
    expect(textInformation).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();
  });

  it("should be go to posts page", () => {
    render(<Home />);

    const postsLink = screen.getByRole("link", {
      name: /ver posts/i,
    });

    expect(postsLink).toHaveAttribute("href", "/posts");
  });
});
