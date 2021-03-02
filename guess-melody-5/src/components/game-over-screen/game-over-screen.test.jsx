import React from "react";
import renderer from "react-test-renderer";
import GameOverScreen from "./welcome-screen";

it(`Should GameOverScreen render correctly`, () => {
  const tree = renderer.create(<GameOverScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});