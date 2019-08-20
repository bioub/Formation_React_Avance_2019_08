import React from 'react';
import { number } from "prop-types";

export function TodoCount({ count = 0 }) {
  return (
    <div className="TodoCount">
      {count > 1 ? count + ' todos' : count + ' todo'} remaining
    </div>
  );
}

TodoCount.propTypes = {
  count: number,
};
