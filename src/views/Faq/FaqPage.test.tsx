import { act, render, screen, waitFor } from "@testing-library/react";
import { FaqPage } from "@/views/Faq/FaqPage";
import { expect } from "vitest";

describe("Faq test", () => {
  beforeEach(async () => {
    await waitFor(() => {
      render(<FaqPage />);
    });
  });
  it("shows the title", async () => {
    const title = await screen.findByRole("heading", { name: "FAQ", level: 2 });
    expect(title).toBeInTheDocument();
  });
  it("shows the toggle button with the text Show", async () => {
    const buttonElement = await screen.findByRole("button", { name: "Show" });
    expect(buttonElement).toBeInTheDocument();
  });
  it("shows the toggle button with text Hide", async () => {
    const buttonElement = await screen.findByRole("button", { name: "Show" });
    act(() => {
      buttonElement.click();
    });
    const buttonElementNew = await screen.findByRole("button", {
      name: "Hide",
    });
    expect(buttonElementNew).toBeInTheDocument();
  });
  it("shows the toggle button with text Show after click on hide", async () => {
    const buttonElement = await screen.findByRole("button", { name: "Show" });
    act(() => {
      buttonElement.click();
    });
    act(() => {
      buttonElement.click();
    });
    const buttonElementNew = await screen.findByRole("button", {
      name: "Show",
    });
    expect(buttonElementNew).toBeInTheDocument();
  });
  it("does not display the FAQ text initially", async () => {
    const faqTextElement = await screen.findByTestId("faq-text");
    expect(faqTextElement).toBeInTheDocument();
    expect(faqTextElement).not.toHaveClass("AccordionTextShow");
    expect(faqTextElement).toHaveClass("AccordionTextHide");
  });
  it("displays the FAQ text after click the button", async () => {
    const buttonElement = await screen.findByRole("button", { name: "Show" });
    act(() => {
      buttonElement.click();
    });
    const faqTextElement = await screen.findByTestId("faq-text");
    expect(faqTextElement).toBeInTheDocument();

    expect(faqTextElement).not.toHaveClass("AccordionTextHide");
    expect(faqTextElement).toHaveClass("AccordionTextShow");
  });
});
