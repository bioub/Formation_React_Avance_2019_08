const { Observable } = require('rxjs');
const { take } = require('rxjs/operators');

function interval(delay) {
  return new Observable((observer) => {
    const intervalId = setInterval(() => {
      observer.next();
    }, delay)
    return () => {
      clearInterval(intervalId);
    };
  })
}

interval(1000)
  .pipe(take(3))
  .subscribe(() => console.log('1s'));
