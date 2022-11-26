import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IPost } from "../../types/Post";
import { Post } from ".";

const post: IPost = {
  userId: 10,
  id: 1,
  title: "title any",
  body: "body any",
  author: {
    id: 10,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "92893822",
    address: {
      city: "Gotham City",
    },
  },
};

describe("Component Post", () => {
  it("should render correctly", () => {
    render(<Post data={post} />);

    const postTitle = screen.getByText(/title any/i);
    const postBody = screen.getByText(/body any/i);

    expect(postTitle).toBeInTheDocument();
    expect(postBody).toBeInTheDocument();
  });
});
