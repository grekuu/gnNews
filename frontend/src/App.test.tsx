// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

// To Test
import App from "./App";

// Tests
describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const h1 = await screen.queryByText("News");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
