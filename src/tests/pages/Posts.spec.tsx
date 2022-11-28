import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GetServerSidePropsContext } from "next";

import { fetchPosts } from "utils/fetchPosts";
import { fetchUsers } from "utils/fetchUsers";
import Posts, { getServerSideProps } from "pages/posts";

jest.mock("utils/fetchPosts");
jest.mock("utils/fetchUsers");

const postsList = [
  {
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
  },
];

describe("Component Post Page", () => {
  it("should be render correctly", () => {
    render(<Posts postsList={postsList} />);

    const postItem = document.querySelector(".postItem");
    const postContent = screen.getByText(
      /voluptates quo voluptatem facilis iure occaecati vel assumenda rerum officia et illum perspiciatis ab deleniti laudantium repellat ad ut et autem reprehenderit/i
    );

    const buttonMorePosts = screen.getByRole("button", {
      name: /mais posts/i,
    });

    expect(postItem).toBeInTheDocument();
    expect(postContent).toBeInTheDocument();
    expect(buttonMorePosts).toBeInTheDocument();
  });

  it("should load the data from the api", async () => {
    const fetchPostsMocked = jest.mocked(fetchPosts);
    const fetchUsersMocked = jest.mocked(fetchUsers);

    fetchPostsMocked.mockResolvedValue([
      {
        userId: 5,
        id: 48,
        title:
          "ut voluptatem illum ea doloribus itaque eos",
        body:
          "voluptates quo voluptatem facilis iure occaecati\n" +
          "vel assumenda rerum officia et\n" +
          "illum perspiciatis ab deleniti\n" +
          "laudantium repellat ad ut et autem reprehenderit",
      },
    ]);

    fetchUsersMocked.mockResolvedValue([
      {
        id: 5,
        name: "Chelsey Dietrich",
        email: "Lucio_Hettinger@annie.ca",
        address: {
          city: "Roscoeview",
        },
        phone: "(254)954-1289",
      },
    ]);

    const response = await getServerSideProps(
      {} as GetServerSidePropsContext
    );

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          postsList,
        },
      })
    );
  });
});
