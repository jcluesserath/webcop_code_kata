import { render, screen } from "@testing-library/react";
import { ContainerPage } from "@/views/Container/ContainerPage";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";

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

    await userEvent.click(startButtonElement);

  const stopWatchTime = await screen.findByText("00:01");

  expect(stopWatchTime).toBeInTheDocument();


  });
  it("stops the stopwatch if we press the stop button", async () => {
    render(<ContainerPage />);
// Todo vi useFaketimer geht nicht richtig
    const startButtonElement = await screen.findByRole("button", {
      name: "Start",
    });
    const stopButtonElement = await screen.findByRole("button", {
      name: "Stop",
    });
    await userEvent.click(startButtonElement);

    const stopWatchTime = await screen.findByText("00:01");

    await userEvent.click(stopButtonElement);

    expect(stopWatchTime).toBeInTheDocument();
  });
  it("resets the stopwatch if we press the reset button", async () =>{
    render(<ContainerPage />);
    const startButtonElement = await screen.findByRole("button", {
      name: "Start",
    });
    const resetButtonElement = await screen.findByRole("button", {
      name: "Reset",
    });
    await userEvent.click(startButtonElement);
    await userEvent.click(resetButtonElement);

    const stopWatchTime = await screen.findByText("00:00");

    expect(stopWatchTime).toBeInTheDocument();
  })
});
