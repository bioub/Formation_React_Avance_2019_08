import React from 'react';
import './App.css';
import { Todos } from '../../todos/components/Todos/Todos';
import { BrowserRouter, Route } from 'react-router-dom';
import { Users } from '../../users/components/Users/Users';
import { TopBar } from '../TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <div className="App-Route-Container">
          <Route path="/todos" component={Todos} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
