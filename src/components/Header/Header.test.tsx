import React from "react";
import { render, waitFor, act, screen } from "@testing-library/react";
import Header from "./Header";
import { LanguageContext } from "../../App";
import { translation } from "../../helpers/translation";

export function setupIntersectionObserverMock({ observe = () => null, unobserve = () => null } = {}) {
  class IntersectionObserver {
    observe = observe;
    unobserve = unobserve;
  }
  Object.defineProperty(window, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });
  Object.defineProperty(global, "IntersectionObserver", {
    writable: true,
    configurable: true,
    value: IntersectionObserver
  });
}

beforeEach(() => {
  setupIntersectionObserverMock();
});

describe("Header component", () => {
  it("renders Header", () => {
    act(() => {
      render(<Header />);
    });
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });
  it("renders Header scrabled title", async () => {
    act(() => {
      render(<Header />);
    });
    await waitFor(() => expect(screen.getByTestId("title")).toHaveTextContent("Łukasz Dymek"), { timeout: 5000 });
  });
  it("header PL version", () => {
    const lang = { language: "PL", texts: translation["PL"] };
    act(() => {
      render(
        <LanguageContext.Provider value={lang}>
          <Header />
        </LanguageContext.Provider>
      );
    });
    expect(screen.getByTestId("title")).toHaveTextContent("programista");
  });
  it("header EN version", () => {
    const lang = { language: "EN", texts: translation["EN"] };
    act(() => {
      render(
        <LanguageContext.Provider value={lang}>
          <Header />
        </LanguageContext.Provider>
      );
    });
    expect(screen.getByTestId("title")).toHaveTextContent("programmer");
  });
});
