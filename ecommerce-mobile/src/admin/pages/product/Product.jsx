import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
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
import productApi from "../../../api/productApi"; 
import { useSnackbar } from "notistack";

Product.propTypes = {
    
};

function Product() {
    const { enqueueSnackbar } = useSnackbar();
    const { params: {productId}, url } = useRouteMatch();
    const {product} = useProductDetail(productId);
   
    const [prdct, setPrdct] = useState(product)
    console.log('prdct',prdct);
    //categories
    
    const [brands, setBrands] = useState([])
    const [roms, setRoms] = useState([])
    const [rams, setRams] = useState([])
    
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
                setRoms(list)
            } catch (error) {
                console.log(error);
            }
        })();
    },[product])
    useEffect(() => {
        (async () => {
            try {
                const list = await ramsApi.getAll();
                setRams(list)
            } catch (error) {
                console.log(error);
            }
        })();
    },[product])

    const handleSubmitBrand = (value) => {
        brands.push(value);
        setBrands(brands);   
    }

    const handleSubmitRom = (value) => {
        roms.push(value);
        setRoms(roms); 
    }

    const handleSubmitRam = (value) => {
        rams.push(value);
        setRams(rams);
        
    }
    
    const handleSubmitEdit = async(value) => {
        try {
            value.id=productId;
            const res = await productApi.edit(value);
            console.log('edit res', res);
            enqueueSnackbar('Edit product thành công', {variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    }

    return (
        <Box style={{ height: 2800, width: '100%',  }}>
            <Paper elevation={0}>
                {product.id &&                    
                    <EditProduct product={product} brands={brands} roms={roms} rams={rams} 
                    onSubmit1={handleSubmitBrand}
                    onSubmit2={handleSubmitRom}
                    onSubmit3={handleSubmitRam}
                    onSubmitEdit={handleSubmitEdit}
                    />                    
                }
                
            </Paper>
        </Box>
    );
}

export default Product;
