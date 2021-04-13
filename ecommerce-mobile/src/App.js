import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Breadcrumb from './component/Breadcrumb';
import Footer from './component/footer';
import Header from './component/Header';
import SlideShow from './component/Slider';
import ProductFeature from './features';
import UserInfo from './features/Auth/components/userInfo';
import ProductHome from './features/HomePageProduct/components';


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={SlideShow} exact />
      {/* <Breadcrumb /> */}
      <Switch >
        <Route path="/" component={ProductHome} exact />
        <Route path="/user-info" component={UserInfo} exact />
        <Route path="/products" component={ProductFeature} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
