import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchApi as mockFetchApi } from "../helpers/fetchApi";
 
jest.mock("../helpers/fetchApi");
 
const testData = [
 { code: { hex: "#967ab3" }, color: "purple", id: 1 },
 { code: { hex: "#52acb7" }, color: "aqua", id: 2 },
];


test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchApi.mockResolvedValue(testData);
  render(<BubblePage />);
  
  const bubbles = screen.findByText(/bubble/i);
  expect(await bubbles).toBeInTheDocument();
});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading