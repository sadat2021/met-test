import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Content";

describe("Content Component", () => {
  test("Show error correctly", () => {
    const { getByTestId, container } = render(
      <App endListLoading={false} error={true} loading={false} items={[]} />
    );
    expect(getByTestId("error")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test("Show loading correctly", () => {
    const { getByTestId, container } = render(
      <App endListLoading={false} error={false} loading={true} items={[]} />
    );
    expect(getByTestId("loading")).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test("Show items correctly", () => {
    const mockItems = [
      {
        status: 200,
        data: {
          title: "title1",
          department: "d1",
          primaryImage: "pi1",
          objectID: 1,
        },
      },
      {
        status: 200,
        data: {
          title: "title2",
          department: "d2",
          primaryImage: "pi2",
          objectID: 2,
        },
      },
      {
        status: 200,
        data: {
          title: "title3",
          department: "d3",
          primaryImage: "pi3",
          objectID: 3,
        },
      },
    ];
    const { getAllByTestId, container } = render(
      <App
        endListLoading={false}
        error={false}
        loading={false}
        items={mockItems}
      />
    );
    expect(getAllByTestId("item").length).toBe(3);
    expect(container).toMatchSnapshot();
  });
});
