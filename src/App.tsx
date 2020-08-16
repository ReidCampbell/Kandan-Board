import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Kandan from './Pages/Kandan/Kandan';
import Error from './Pages/Error/Error';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/kandan'>
            <Kandan />
          </Route>
          <Route patch='/'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
