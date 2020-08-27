import React from "react";
import './ProgressFoo.css';

// tag::props[]
interface ProgressFooProps {
  /** value of progress (min=0, max=100, default is 50) */
  now?: number
}
// end::props[]

const ProgressFoo = ({ now = 50 }: ProgressFooProps) => {
  return (
    <progress value={now} max="100"></progress>
  )
}

export default ProgressFoo;
