import { Link, useRouteMatch } from "react-router-dom";
import "../../pages/product/product.css";
import {productData} from "../../dummyData"
import { Publish } from "@material-ui/icons";
import Chart from "../../components/chart/Chart";
import useProductDetail from '../../components/hook/useProductDetail'
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from "@material-ui/core";
import EditProduct from "./components/EditProduct";
import brandsApi from "../../../api/brandsApi";
import romsApi from "../../../api/romsApi";
import ramsApi from "../../../api/ramsApi";

Product.propTypes = {
    
};

function Product() {
    const { params: {productId}, url } = useRouteMatch();
    const {product} = useProductDetail(productId);
    console.log({product})
    
    //categories
    
    const [brands, setBrands] = useState([])
    const [roms, setRoms] = useState([])
    const [rams, setRams] = useState([])
    console.log('brands', brands);
    console.log('rams', rams);
    
    useEffect(() => {
        (async () => {
            try {
                const list = await brandsApi.getAll();
                console.log('list', list);
                setBrands(list)
            } catch (error) {
                console.log(error);
            }
        })();
    },[product])
    useEffect(() => {
        (async () => {
            try {
                const list = await romsApi.getAll();
                setRoms(list.map((x) => ({
                    id: x.id,
                    rom: x.rom
                }))
                )
            } catch (error) {
                console.log(error);
            }
        })();
    },[product])
    useEffect(() => {
        (async () => {
            try {
                const list = await ramsApi.getAll();
                setRams(list.map((x) => ({
                    id: x.id,
                    ram: x.ram
                }))
                )
            } catch (error) {
                console.log(error);
            }
        })();
    },[product])
      
    //end categories
    const handleSubmitBrand = (value) => {
        console.log('value product', value)
        setBrands(value)
    }
    

    return (
        <Box style={{ height: 800, width: '100%',  }}>
            <Paper elevation={0}>
                {product.id && 
                    
                    <EditProduct product={product} brands={brands} roms={roms} rams={rams} onSubmit={handleSubmitBrand}/>
                    
                }
                
            </Paper>
        </Box>
    );
}

export default Product;
