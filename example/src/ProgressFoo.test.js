import React from "react";
import renderer from "react-test-renderer";

import ProgressFoo from "./ProgressFoo";

describe("<ProgressFoo />", () => {
  
  it("should match snapshot", () => {
    const cmp = renderer.create(
    // tag::basic[]
    <ProgressFoo now="50" />
    // end::basic[]
    ).toJSON();
    expect(cmp).toMatchSnapshot();
  });

});
