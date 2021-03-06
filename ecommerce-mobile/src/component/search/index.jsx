import { Box, makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import productApi from '../../api/productApi';
import FormSearch from './FormSearch';
import ProductsSearch from './ProductsSearch';
SearchForm.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {},

  search: {
    background: '#ffff',
    width: '300px',
    borderRadius: '4px',
    // height: '30px !important'
  },

  product: {
    background: 'white',
    zIndex: '2',
    // height: '130px',
    width: '430px',
    position: 'absolute',
    padding: '10px 10px',
    border: '1px solid black',
    left: '100px',
    top: '60px',
    // display: 'none'
  },
}));
function SearchForm(props) {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [viewProducts, setViewProduct] = useState(false);
  const [pagination, setPagination] = useState({
    limit: 3,
    total: 3,
    page: 1,
  });
  const history = useHistory();

  const location = useLocation();
  const [filters, setFilters] = useState({
    _limit: 3,
    _page: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const paramsString = queryString.stringify(filters);

        const rp = await productApi.getAll2(paramsString);
        // const his = await .productApi
        const { data, pagination } = rp;

        setProducts(data);
        setPagination(pagination);
      } catch (error) {
        console.log('failed');
      }
    })();
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    if (newFilters.searchTerm === '') {
      setFilters({
        _page: 1,
        _limit: 3,
      });
    } else {
      setFilters({
        ...filters,
        _page: 1,
        title_like: newFilters.searchTerm,
      });
    }
  };

  // const match = useRouteMatch();
  const handleChangeVPOpen = () => {
    setViewProduct(true);
  };
  const handleChangeVPClose = () => {
    setTimeout(() => {
      setViewProduct(false);
    }, 300);
  };
  return (
    <div className={classes.root}>
      <FormSearch
        onSubmit={handleFiltersChange}
        changeVPO={handleChangeVPOpen}
        changeVPC={handleChangeVPClose}
      />
      {viewProducts && (
        <Box className={classes.product}>
          <ProductsSearch data={products} />
        </Box>
      )}
    </div>
  );
}

export default SearchForm;
