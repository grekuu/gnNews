import { describe, it, expect, afterEach } from "vitest";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  getByTestId,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { BsGridFill, BsList } from "react-icons/bs";

describe("Renders main page correctly", async () => {
  afterEach(() => {
    cleanup();
  });

  it("Should render the page correctly", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const h1 = await screen.queryByText("News.1");

    expect(h1).not.toBeNull();
  });

  it("Should show the language is set to English by default", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = await screen.queryByText("Language.1");

    expect(button).not.toBeNull();
  });

  it("Should show PopUp list", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const button = await screen.queryByText("Language.1");

    expect(button).not.toBeNull();

    fireEvent.click(button as HTMLElement);

    const buttonEnglish = await screen.queryByText("English.1");

    expect(buttonEnglish).not.toBeNull();
  });

  it("Should have a non-empty store", async () => {
    expect(store.getState()).not.toEqual({});
  });

  it("Should show grid icon after list-icon click", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const listIconElement = screen.getByTestId("list-icon");

    expect(listIconElement).not.toBeNull();

    fireEvent.click(listIconElement as HTMLElement);

    const gridIconElement = screen.getByTestId("grid-icon");

    expect(gridIconElement).not.toBeNull();
  });
});
