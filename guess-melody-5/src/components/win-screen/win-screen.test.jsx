import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./welcome-screen";

it(`Should WinScreen render correctly`, () => {
  const tree = renderer.create(<WinScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
