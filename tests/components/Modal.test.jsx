import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // For additional matchers
import Modal from "../../src/components/Modal/Modal";

describe("Modal component", () => {
  test("renders without errors", () => {
    render(<Modal />);
    const modalElement = screen.getByTestId("modal");
    expect(modalElement).toBeInTheDocument();
  });

  test("updates taskname state when input value changes", () => {
    render(<Modal />);
    const inputElement = screen.getByPlaceholderText("Enter Task Summary");
    fireEvent.change(inputElement, { target: { value: "New Task" } });
    expect(inputElement.value).toBe("New Task");
  });

  test("updates taskDesc state when textarea value changes", () => {
    render(<Modal />);
    const textareaElement = screen.getByPlaceholderText("Enter Task Details");
    fireEvent.change(textareaElement, {
      target: { value: "Task description" },
    });
    expect(textareaElement.value).toBe("Task description");
  });
});
