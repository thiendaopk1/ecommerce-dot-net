import { Box, Paper } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import brandsApi from '../../../api/brandsApi';
import productApi from '../../../api/productApi';
import ramsApi from '../../../api/ramsApi';
import romsApi from '../../../api/romsApi';
import useProductDetail from '../../components/hook/useProductDetail';
import '../../pages/product/product.css';
import EditProduct from './components/EditProduct';

Product.propTypes = {};

function Product() {
  const { enqueueSnackbar } = useSnackbar();
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const { product } = useProductDetail(productId);

  const [prdct, setPrdct] = useState(product);
  console.log('prdct', prdct);
  //categories

  const [brands, setBrands] = useState([]);
  const [roms, setRoms] = useState([]);
  const [rams, setRams] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await brandsApi.getAll();
        console.log('list', list);
        setBrands(list);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [product]);
  useEffect(() => {
    (async () => {
      try {
        const list = await romsApi.getAll();
        setRoms(list);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [product]);
  useEffect(() => {
    (async () => {
      try {
        const list = await ramsApi.getAll();
        setRams(list);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [product]);

  const handleSubmitBrand = (value) => {
    brands.push(value);
    setBrands(brands);
  };

  const handleSubmitRom = (value) => {
    roms.push(value);
    setRoms(roms);
  };

  const handleSubmitRam = (value) => {
    rams.push(value);
    setRams(rams);
  };

  const handleSubmitEdit = async (value) => {
    try {
      value.id = productId;
      const res = await productApi.edit(value);
      console.log('edit res', res);
      enqueueSnackbar('Edit product thành công', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <Box style={{ height: 2800, width: '100%' }}>
      <Paper elevation={0}>
        {product.id && (
          <EditProduct
            product={product}
            brands={brands}
            roms={roms}
            rams={rams}
            onSubmit1={handleSubmitBrand}
            onSubmit2={handleSubmitRom}
            onSubmit3={handleSubmitRam}
            onSubmitEdit={handleSubmitEdit}
          />
        )}
      </Paper>
    </Box>
  );
}

export default Product;
