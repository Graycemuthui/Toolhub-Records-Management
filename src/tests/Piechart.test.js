import React from "react";
import TestRenderer from "react-test-renderer";
import Piechart from "../components/Dashboard/Charts/Piechart";

it("Piechart render correctly", () => {
  const tree = TestRenderer.create(<Piechart />).toJSON();
  expect(tree).toMatchSnapshot();
});
