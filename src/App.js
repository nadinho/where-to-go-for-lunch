import React from 'react';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Thanks from './pages/Thanks';
import Start from './pages/Start';
import Add from './pages/Add';

function App() {
  return (
    <Router>
      <Header></Header>
      <Searchbar></Searchbar>
      <main>
        <Switch>
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/Add">
            <Add />
          </Route>
          <Route path="/Thanks">
            <Thanks />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
