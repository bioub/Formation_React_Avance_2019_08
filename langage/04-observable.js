const { Observable } = require('rxjs');
const { take } = require('rxjs/operators');

// Les promesses ne fonctionnent si le callback est appelé
// plusieurs fois, à la place on pourrait un Observable
// pour l'instant il faut utiliser des libs comme rxjs
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


/*

var keyup = Rx.Observable.fromEvent($input, 'keyup')
      .map(function (e) {
        return e.target.value; // Project the text from the input
      })
      .filter(function (text) {
        return text.length > 2; // Only if the text is longer than 2 characters
      })
      .debounce(750 )
      .distinctUntilChanged(); // Only if the value has changed

    var searcher = keyup.flatMapLatest(searchWikipedia);
------{event}--------{event}--{event}----------{event}--{event}-------------{event}
map(e => e.target.value)
------{r    }--------{re   }--{rea  }----------{reac }--{react}-------------{react}
filter(v => v.length > 2)
------------------------------{rea  }----------{reac }--{react}-------------{react}
debounce(750)
--------------------------------------------{rea}--------------------{react}--------{react}
distinctUntilChanged
--------------------------------------------{rea}--------------------{react}---------------
-------------------------------------------------------------------------------------------------------{"q":"react"}---------------

    */

