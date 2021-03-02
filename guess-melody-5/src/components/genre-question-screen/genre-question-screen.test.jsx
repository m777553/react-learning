import React from "react";
import renderer from "react-test-renderer";
import GenreQuestionScreen from "./genre-question-screen";

it(`Should GenreQuestionScreen render correctly`, () => {
  const tree = renderer.create(<GenreQuestionScreen />).toJSON();

  expect(tree).toMatchSnapshot();
});
