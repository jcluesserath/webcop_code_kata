import { act, render, screen } from "@testing-library/react";
import { expect } from "vitest";
import { ContainerPage } from "@/views/Container/ContainerPage";

describe("Container check", () => {
  it("shows the headline of the page", async () => {
    render(<ContainerPage />);
    const title = await screen.findByRole("heading", {
      name: "Stopwatch",
      level: 2,
    });
    expect(title).toBeInTheDocument();
  });
  it("displays the stopwatch container", async () => {
    render(<ContainerPage />);
    const containerElement = await screen.findByTestId("stopwatch-container");
    expect(containerElement).toBeInTheDocument();
  });
  it("displays the stopwatch button container", async () => {
    render(<ContainerPage />);
    const containerElement = await screen.findByTestId(
      "stopwatch-button-container"
    );
    expect(containerElement).toBeInTheDocument();
  });
  it("displays the stopwatch start button", async () => {
    render(<ContainerPage />);
    const startButtonElement = await screen.findByRole("button", {
      name: "Start",
    });
    expect(startButtonElement).toBeInTheDocument();
  });
  it("displays the stopwatch stop button", async () => {
    render(<ContainerPage />);
    const stopButtonElement = await screen.findByRole("button", {
      name: "Stop",
    });
    expect(stopButtonElement).toBeInTheDocument();
  });
  it("displays the stopwatch reset button", async () => {
    render(<ContainerPage />);
    const resetButtonElement = await screen.findByRole("button", {
      name: "Reset",
    });
    expect(resetButtonElement).toBeInTheDocument();
  });
  it("displays the stopwatch start time", async () => {
    render(<ContainerPage />);
    const startTime = await screen.findByText("00:00");
    expect(startTime).toBeInTheDocument();
  });
  it("starts the stopwatch if we press the start button", async () => {
    render(<ContainerPage />);
    const startButtonElement = await screen.findByRole("button", {
      name: "Start",
    });
    act(() => {
      startButtonElement.click();
    });
    const startTime = await screen.findByText("00:01");

    expect(startTime).toBeInTheDocument();

  });
  it("", )
});
