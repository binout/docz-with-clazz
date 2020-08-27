import React from "react";

// tag::props[]
interface ProgressFooProps {
  /** value of progress (min=0, max=100, default is 50) */
  now?: number
}
// end::props[]

const ProgressFoo = ({ now = 50 }: ProgressFooProps) =>
    <h1>{now}</h1>

export default ProgressFoo;
