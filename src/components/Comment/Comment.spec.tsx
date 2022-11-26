import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IComment } from "../../types/Comment";

import { Comment } from ".";

const comment: IComment = {
  id: 1,
  name: "id labore ex et quam laborum",
  body: "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
  email: "eliseo@gardner.biz",
};

describe("Component Comment", () => {
  it("should render correctly", () => {
    render(<Comment data={comment} />);

    const commentTitle = screen.getByText(
      /id labore ex et quam laborum/i
    );
    const userEmail = screen.getByText(
      /eliseo@gardner\.biz/i
    );
    const commentBody = screen.getByText(
      /laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium/i
    );

    expect(commentTitle).toBeInTheDocument();
    expect(commentBody).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });
});
