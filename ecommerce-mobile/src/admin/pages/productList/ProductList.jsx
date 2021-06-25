import "../../pages/productList/productList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Box, Grid, makeStyles } from '@material-ui/core';

import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import productApi from '../../../api/productApi'
import queryString from 'query-string';
import TableProduct from "./TableProduct";

function ProductList() {
  const [productList, setProductList] = useState([]);
  console.log('productList', productList);
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
        ...params,
        _limit: 253,
       
    };
}, [location.search]);
  useEffect(() => {
    (async () => {
      try {
        const params2={...queryParams};
        const rp=await productApi.getAll(params2);
        const {data} = rp
        setProductList(data);
      } catch (error) {
        console.log('failed');
      }
    })();
  },[])
  
  

  return (
    <div style={{ height: 600, width: '100%',  }} >
      <TableProduct data ={productList}/>
    </div>
    
  
  );
}
export default ProductList;