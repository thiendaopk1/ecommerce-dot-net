
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
import ProductNew from './pages/newProduct/ProductNew';
import Categories from './pages/category/Categories';
import EditBrands from './pages/category/component/editForm/EditBrands';
import EditRams from './pages/category/component/editForm/EditRams';
import EditRoms from './pages/category/component/editForm/EditRoms';
import NewBrands from './pages/category/component/newCategories/NewBrands';
import './Admin.css';
import NewRams from './pages/category/component/newCategories/NewRams';
import NewRoms from './pages/category/component/newCategories/NewRoms';
import Purchase from './pages/ordersManager';
import CommentList from './pages/commentList/CommentList';
import EditInfo from './pages/product/components/EditInfo'
// import NewProduct from './pages/product/components/NewProduct'

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
          <Route path="/Admin/product/:productId" exact>
            <Product />
          </Route>
          <Route path="/Admin/newproduct">
            <ProductNew />
          </Route>
          <Route path="/Admin/categories" exact>
            <Categories />
          </Route>
          <Route path="/Admin/orders-manager">
            <Purchase />
          </Route>
          <Route path="/Admin/comments">
            <CommentList />
          </Route>
          <Route path="/Admin/categories/edit-brand/:brandId" exact>
            <EditBrands />
          </Route>
          <Route path="/Admin/categories/new-brand" exact>
            <NewBrands />
          </Route>
          <Route path="/Admin/categories/edit-ram/:ramId" exact>
            <EditRams />
          </Route>
          <Route path="/Admin/categories/new-ram" exact>
            <NewRams />
          </Route>
          <Route path="/Admin/categories/edit-rom/:romId" exact>
            <EditRoms />
          </Route>
          <Route path="/Admin/categories/new-rom" exact>
            <NewRoms />
          </Route>
          <Route path="/Admin/product/:productId/:infomationId" exact>
            <EditInfo />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Admin;
