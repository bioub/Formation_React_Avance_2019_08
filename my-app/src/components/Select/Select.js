import React, { Component, useState, useCallback } from 'react';
import css from './Select.module.css';

// export class SelectOld extends Component {
//   state = {
//     show: false,
//   };
//   handleClick = () => {
//     this.setState({
//       show: !this.state.show,
//     });
//   }
//   render() {

//   }
// }

export function Select({ title, children }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  // sans useCallback la function serait recréé à chaque render
  // useCallback permet de memoisé la fonction (la mettre en cache)
  const handleClick = useCallback(() => {
    setShow(!show);
    setCount(count + 1);
  }, [show, count]);

  return (
    <div className={css.Container}>
      <div className={css.Title} onClick={handleClick}>{title} {count}</div>
      {show && (
        <div className={css.Items}>
          {children(handleClick)}
        </div>
      )}
    </div>
  )
}
