import React from "react";
import renderer from "react-test-renderer";
import WinScreen from "./win-screen";

it(`Should WinScreen render correctly`, () => {
  const tree = renderer.create(<WinScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
