import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './component/footer';
import Header from './component/Header';
import SlideShow from './component/Slider';
import ProductFeature from './features';
import UserInfo from './features/Auth/components/userInfo';
import ProductHome from './features/HomePageProduct/components';
import ShoppingCartFeature from './features/ShoppingCart';
import CheckOut from './features/ShoppingCart/components/CheckOut';
import PaymentSuccess from './features/ShoppingCart/components/CheckOut/PaymentSuccess';


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={SlideShow} exact />
      {/* <Breadcrumb /> */}
      <Switch >
        <Route path="/" component={ProductHome} exact />
        <Route path="/user-info" component={UserInfo} />
        <Route path="/products" component={ProductFeature} />
        <Route path="/cart" component={ShoppingCartFeature} />
        <Route path="/checkout" component={CheckOut}/>
        <Route path="/payment-success" component={PaymentSuccess}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
