import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { Header } from ".";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    asPath: "/",
  }),
}));

describe("Component Header", () => {
  it("should render correctly", () => {
    render(<Header />);

    const logo = screen.getByRole("link", {
      name: /btix/i,
    });

    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });

    const postsLink = screen.getByRole("link", {
      name: /posts/i,
    });

    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(postsLink).toBeInTheDocument();
  });

  it("should be The home page active", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });

    expect(homeLink).toHaveClass("active");
  });

  it("should be possible to navigate between header links", () => {
    render(<Header />);

    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    const postsLink = screen.getByRole("link", {
      name: /posts/i,
    });

    expect(homeLink).toHaveAttribute("href", "/");
    expect(postsLink).toHaveAttribute("href", "/posts");
  });

  it("should be possible to activate the post page link", () => {
    const useRouterMocked = jest.mocked(useRouter);

    useRouterMocked.mockReturnValueOnce({
      asPath: "/posts",
    } as any);

    render(<Header />);

    const homeLink = screen.getByRole("link", {
      name: /home/i,
    });
    const postsLink = screen.getByRole("link", {
      name: /posts/i,
    });

    expect(homeLink).not.toHaveClass("active");
    expect(postsLink).toHaveClass("active");
  });

  it("should go to the homepage when clicking on the logo", () => {
    render(<Header />);

    const logo = screen.getByRole("link", {
      name: /btix/i,
    });

    expect(logo).toHaveAttribute("href", "/");
  });
});
