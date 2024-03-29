import React, { Component, useState, useEffect } from 'react';
// import moment from 'moment';
import { format } from 'date-fns';
// import format from 'date-fns/format'; // cherry-pick

import { desactivable } from '../../hocs/desactivable';

// class Clock extends Component {
//   constructor() {
//     super();
//     this.state = {
//       options: {
//         format: 'HH:mm:ss',
//       },
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     this._interval = setInterval(() => {
//       // Object.assign() / shallow merge
//       this.setState({
//         options: {
//           ...this.state.options,
//           delay: 1000,
//         },
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   componentWillUnmount() {
//     clearInterval(this._interval);
//   }
//   render() {
//     //    { format: 'HH:mm'                }
//     const { format: formatNow = 'HH:mm:ss' } = this.props;
//     // dans un composant stateful on manipule les props via this.props
//     // return <div className="Clock">{moment(this.state.now).format(formatNow)}</div>;
//     return <div className="Clock">{format(this.state.now, formatNow)}</div>;
//   }
// }

function Clock({ format: formatNow = 'HH:mm:ss' }) {
  const [now, updateNow] = useState(new Date());
  useEffect(() => {
    console.log('Use effect');
    const id = setInterval(() => {
      updateNow(new Date());
    }, 1000);
    return () => { // componentWillUnmount
      clearInterval(id);
    };
  }, []);
  return <div className="Clock">{format(now, formatNow)}</div>;
}

// const Clock = React.memo(Clock);

const ClockDesactivable = desactivable(Clock);

export { Clock, ClockDesactivable };
