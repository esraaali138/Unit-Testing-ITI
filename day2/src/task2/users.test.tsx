import { render, screen } from "@testing-library/react";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import React from "react";

import { afterAll, afterEach, beforeAll, describe, expect, test } from "vitest";

import Users from "./Users";
const UserMocked = [
  {
    id: 1,
    name: "esraa",
    email: "esraa@gamil.com",
    city: "mansoura",
  },
  {
    id: 2,
    name: "sara",
    email: "sara@gamil.com",
    city: "alex",
  }, {
    id: 3,
    name: "ahmed",
    email: "ahmed@gamil.com",
    city: "cairo",
  }, {
    id: 4,
    name: "ali",
    email: "ali@gamil.com",
    city: "mansoura",
  }, {
    id: 5,
    name: "nada",
    email: "nada@gamil.com",
    city: "cairo",
  },
];

const server = setupServer(
  http.get("*/users", () => {
    return HttpResponse.json(UserMocked);
  })
);
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("<users/>", () => {
  test("users list after successful data fetching", async () => {
    render(<Users />);

    UserMocked.forEach((user) => {
      expect(
        screen.getByRole("heading", { level: 2, name: user.name })
      ).toBeInTheDocument();
      expect(screen.getByText(user.city)).toBeInTheDocument();
    });
  });

  test("something wrong when fetch users fails", async () => {
    server.use(
      http.get("*/users", () => {
        return HttpResponse.json({}, { status: 400 });
      })
    );
    render(<Users />);

    expect(screen.getByRole("alert")).toHaveTextContent("Something went wrong");
  });

  test("empty message for empty users response", async () => {
    server.use(
      http.get("*/users", () => {
        return HttpResponse.json([]);
      })
    );
    render(<Users />);

    expect(screen.getByText("No users available")).toBeInTheDocument();
  });
});
