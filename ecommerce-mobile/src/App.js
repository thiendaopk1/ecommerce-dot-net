import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductFeature from './features';

import './App.css';
import Header from './component/Header';

function App() {
 
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route path="/products" component={ProductFeature}/>
      </Switch>
    </div>
  );
}

export default App;
