import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ProductFeature from './features';

function App() {
 
  return (
    <div className="App">
    
      <Switch >
        <Route path="/products" component={ProductFeature}/>
      </Switch>
    </div>
  );
}

export default App;
