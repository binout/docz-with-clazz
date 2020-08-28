import React from "react";
import styled from 'styled-components';

// tag::props[]
interface ProgressFooProps {
  /** value of progress (min=0, max=100, default is 50) */
  now?: number,
  /** variant which defines color (default is info) */
  variant?: 'success' | 'info' | 'warning' | 'danger',
  /** set to true to display a label next to progress bar (default is false) */
  label?: boolean
}
// end::props[]

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  ::-webkit-progress-value { 
    background-color: ${props => props.color}
  } 
  ::-moz-progress-bar {
    background-color: ${props => props.color}
  }
`;

const ProgressFoo = ({ now = 50, variant = 'info', label = false }: ProgressFooProps) => {
  let color
  switch (variant) {
    case 'info': color = 'blue'; break;
    case 'success': color = 'green'; break;
    case 'warning': color = 'orange'; break;
    case 'danger': color = 'red'; break;
  }
  return (
    <div>
      <ProgressBar value={now} max="100" color={color}></ProgressBar>
      {label ? <span>{now}%</span> : ''}
    </div>
  )
}

export default ProgressFoo;
