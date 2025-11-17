import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).not.toBeNull();
    expect(baseElement.innerHTML).not.toEqual("");
  });
});
