import React from "react";
import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Form from "./Form";
import userEvent from "@testing-library/user-event";

//
const handleSubmitMocked = jest.fn();
///

const values = {
  firstName: "esraa",
  lastName: "ali",
  email: "esraaali@yahoo.com",
};

//
describe("<form/>", () => {
  test("should show firstNameInput", () => {
    render(<Form  handleSubmit = {handleSubmitMocked} />);
    const firstNameInput = screen.getByPlaceholderText("First Name");
    expect(firstNameInput).toBeInTheDocument();
  });
  //
  test("should show lastNameInput", () => {
    render(<Form />);
    const lastNameInput = screen.getByPlaceholderText("Last Name");

    expect(lastNameInput).toBeInTheDocument();
  });
  //
  test("should change on input firstName", () => {
    render(<Form />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: values.firstName },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: values.lastName },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: values.email },
    });
  });
  //
  test('the user click submit' , ()=>{
      render(<Form handleSubmit={handleSubmitMocked} />);
      userEvent.click(screen.getByRole('button' , {name: 'Register'}));
      expect(handleSubmitMocked).toHaveBeenCalled();
  })
  //
  test("the message has been login in success", () => {
    render(<Form />);
    expect(screen.getByText("Welcome esraa ali")).toBeInTheDocument();
    expect(
      screen.getByText("Your registration was successful! ")
    ).toBeInTheDocument();
  });
  //
  test("the message has been login in success", () => {
    render(<Form />);
    expect(
      screen.getByText("Your registration was successful! ")
    ).toBeInTheDocument();
  });
});
