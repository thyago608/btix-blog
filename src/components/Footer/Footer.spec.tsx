import {
  screen,
  render,
  fireEvent,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from ".";

describe("Footer Component", () => {
  it("should render correctly", () => {
    render(<Footer />);

    const siteLabel = screen.getByText(
      /btix blog © todos os direitos reservados/i
    );

    const buttonScrollTop = screen.getByRole("button");

    expect(siteLabel).toBeInTheDocument();
    expect(buttonScrollTop).toBeVisible();
    expect(buttonScrollTop).toBeEnabled();
  });

  it("should be possibe scroll top", () => {
    window.HTMLElement.prototype.scrollTo = jest.fn();
    render(<Footer />);

    const buttonScrollTop = screen.getByRole("button");

    fireEvent.click(buttonScrollTop);
    fireEvent.scroll(window, {
      target: {
        scrollY: 0,
      },
    });

    expect(window.scrollY).toEqual(0);
  });
});
