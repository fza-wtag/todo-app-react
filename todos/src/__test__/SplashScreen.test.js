import React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SplashScreen from "components/SplashScreen";

describe("<SplashScreen/>", () => {
  it("renders the splashscreen properly", () => {
    render(<SplashScreen />);
    const mainDiv = screen.getByTestId("splash-screen");
    expect(mainDiv).toBeInTheDocument();
  });
});
