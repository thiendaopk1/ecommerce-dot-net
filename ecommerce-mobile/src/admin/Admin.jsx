
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';
import Categories from './pages/category/Categories'
import EditBrands from './pages/category/component/editForm/EditBrands'
import './Admin.css';

Admin.propTypes = {
  
};

function Admin(props) {
  return (
    <div>
      {/* <Topbar /> */}
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/Admin">
            <Home />
          </Route>
          <Route path="/Admin/users">
            <UserList />
          </Route>
          <Route path="/Admin/user/:userId">
            <User />
          </Route>
          <Route path="/Admin/newUser">
            <NewUser />
          </Route>
          <Route path="/Admin/products">
            <ProductList />
          </Route>
          <Route path="/Admin/product/:productId">
            <Product />
          </Route>
          <Route path="/Admin/newproduct">
            <NewProduct />
          </Route>
          <Route path="/Admin/categories">
            <Categories />
          </Route>
          <Route path="/Admin/categories/edit-brand">
            <EditBrands />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
