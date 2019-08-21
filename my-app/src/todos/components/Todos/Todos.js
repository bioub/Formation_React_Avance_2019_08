import React from 'react';
import { TodoFormContainer } from '../../containers/TodoFormContainer';
import { TodoListContainer } from '../../containers/TodoListContainer';
import { Clock, ClockDesactivable } from '../../../components/Clock/Clock';
import { Select } from '../../../components/Select/Select';

export function Todos(props) {
  console.log(props);
  return (
    <div className="Todos">
      <TodoFormContainer />
      <TodoListContainer />

      <hr />
      <Clock format="HH:mm:ss" />
      {/* <ClockDesactivable format="HH:mm" show={false}  /> */}
      <Select title="Cliquez ici" >
        {(close) => (
          <>
            <p>Contenu de la dropdown</p>
            <button onClick={close}>Off</button>
          </>
        )}
      </Select>
    </div>
  );
}
