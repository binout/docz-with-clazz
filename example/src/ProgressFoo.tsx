import React from "react";

// tag::props[]
type ProgressFooProps = {
  // value of progress, default is 50
  now?: number 
}
// end::props[]

const ProgressFoo: React.FC<ProgressFooProps> = ({ now = 50 }) => {
  return (<div>{now}</div>)
};

export default ProgressFoo;
