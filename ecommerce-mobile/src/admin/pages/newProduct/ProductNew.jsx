import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
// import "../../pages/product/product.css";

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from "@material-ui/core";
import NewProduct from "./NewProduct";
import brandsApi from "../../../api/brandsApi";
import romsApi from "../../../api/romsApi";
import ramsApi from "../../../api/ramsApi";
import productApi from '../../../api/productApi';

import { useSnackbar } from "notistack";

ProductNew.propTypes = {
    
};

function ProductNew() {
    const { enqueueSnackbar } = useSnackbar();
   
    
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
    },[])
    useEffect(() => {
        (async () => {
            try {
                const list = await romsApi.getAll();
                setRoms(list)
            } catch (error) {
                console.log(error);
            }
        })();
    },[])
    useEffect(() => {
        (async () => {
            try {
                const list = await ramsApi.getAll();
                setRams(list)
            } catch (error) {
                console.log(error);
            }
        })();
    },[])

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
    
    const handleSubmitNew = async(value) => {
        try {
            const res = await productApi.add(value);
            console.log('edit res', res);
            enqueueSnackbar('Edit product thành công', {variant: 'success'});
            // console.log('value', value);
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    }

    return (
        <Box style={{ height: 1500, width: '100%',  }}>
            <Paper elevation={0}>                 
                    <NewProduct  brands={brands} roms={roms} rams={rams} 
                    onSubmit1={handleSubmitBrand}
                    onSubmit2={handleSubmitRom}
                    onSubmit3={handleSubmitRam}
                    onSubmitNew={handleSubmitNew}
                    />                     
                
            </Paper>
        </Box>
    );
}

export default ProductNew;
