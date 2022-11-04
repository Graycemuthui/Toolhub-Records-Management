import React from "react";
import TestRenderer from "react-test-renderer";
import Percentage from "../components/Dashboard/Charts/Percentage";

it("Percentage chart render correctly", () => {
  const tree = TestRenderer.create(<Percentage />).toJSON();
  expect(tree).toMatchSnapshot();
});
