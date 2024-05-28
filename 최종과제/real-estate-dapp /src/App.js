import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContractPage from './pages/ContractPage';
import UserPage from './pages/UserPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/contract" component={ContractPage} />
          <Route path="/user" component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;