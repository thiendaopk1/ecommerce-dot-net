import { Link, useRouteMatch } from "react-router-dom";
import "../../pages/product/product.css";
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Chart from "../../components/chart/Chart";
import useProductDetail from '../../components/hook/useProductDetail'
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from "@material-ui/core";
import EditProduct from "./components/EditProduct";

Product.propTypes = {
    
};

function Product() {
    const { params: {productId}, url } = useRouteMatch();
    const {product} = useProductDetail(productId);
    // console.log('product', product);
    return (
        <Box style={{ height: 800, width: '100%',  }}>
            <Paper elevation={0}>
                <EditProduct product={product}/>
            </Paper>
        </Box>
    );
}

export default Product;
