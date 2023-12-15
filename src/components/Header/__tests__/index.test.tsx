import React from "react";

import { render } from "@testing-library/react";

import Header from "../";
import type { HeaderProps } from "../types";

describe("Test components: Header", () => {
  let props: HeaderProps;
  const renderHeader = () => render(<Header {...props} />);

  it("Snapshot", () => {
    const { container } = renderHeader();

    expect(container).toMatchSnapshot();
  });
});
