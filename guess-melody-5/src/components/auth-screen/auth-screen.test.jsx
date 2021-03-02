import React from "react";
import renderer from "react-test-renderer";
import AuthScreen from "./welcome-screen";

it(`Should AuthScreen render correctly`, () => {
  const tree = renderer.create(<AuthScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
