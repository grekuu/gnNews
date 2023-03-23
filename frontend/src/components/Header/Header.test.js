import { render, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { describe, it, expect } from "vitest";

describe("Addition", () => {
  it("knows that 2 and 2 make 4", () => {
    expect(2 + 2).toBe(4);
  });
});
