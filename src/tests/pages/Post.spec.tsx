import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GetServerSidePropsContext } from "next";

import { fetchPostID } from "utils/fetchPostID";
import { fetchComments } from "utils/fetchComments";
import { IPost } from "types/Post";
import { IComment } from "types/Comment";
import Post, { getServerSideProps } from "pages/post/[id]";

jest.mock("utils/fetchPostID");
jest.mock("utils/fetchComments");

const post: IPost = {
  userId: 5,
  id: 48,
  title: "ut voluptatem illum ea doloribus itaque eos",
  body:
    "voluptates quo voluptatem facilis iure occaecati\n" +
    "vel assumenda rerum officia et\n" +
    "illum perspiciatis ab deleniti\n" +
    "laudantium repellat ad ut et autem reprehenderit",
  author: {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      city: "Roscoeview",
    },
    phone: "(254)954-1289",
  },
};

const comments: IComment[] = [
  {
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\n" +
      "tempora quo necessitatibus\n" +
      "dolor quam autem quasi\n" +
      "reiciendis et nam sapiente accusantium",
  },
];

describe("Component Post Page", () => {
  it("should be render correctly", () => {
    render(<Post post={post} comments={comments} />);

    const commentContent = screen.getByText(
      /laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium/i
    );

    const commentTitle = screen.getByText(
      /id labore ex et quam laborum/i
    );

    const userEmail = screen.getByText(
      /eliseo@gardner\.biz/i
    );

    expect(commentTitle).toBeInTheDocument();
    expect(commentContent).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });

  it("should load the data from the api", async () => {
    const fetchPostMocked = jest.mocked(fetchPostID);
    const fetchCommentsMocked = jest.mocked(fetchComments);

    fetchPostMocked.mockResolvedValue(post);

    fetchCommentsMocked.mockResolvedValue([
      {
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body:
          "laudantium enim quasi est quidem magnam voluptate ipsam eos\n" +
          "tempora quo necessitatibus\n" +
          "dolor quam autem quasi\n" +
          "reiciendis et nam sapiente accusantium",
      },
    ]);

    const response = await getServerSideProps(
      {} as GetServerSidePropsContext
    );

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post,
          comments,
        },
      })
    );
  });
});
