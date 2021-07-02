import { makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation} from 'react-router';
import { useHistory } from 'react-router-dom';
import productApi from '../../api/productApi';
import FormSearch from './FormSearch';
import ProductsSearch from './ProductsSearch';
SearchForm.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    root:{
       
    },

    search:{
        background: '#ffff',
        width: '300px',  
        borderRadius: '4px',
        // height: '30px !important' 
    }
  
  }));
function SearchForm(props) {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    const history = useHistory();
    console.log(products.id);
    const location = useLocation();
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    })
    
    useEffect(() => {
        (async () => {
            try{
                const paramsString=queryString.stringify(filters);
                console.log("param",paramsString);
                const rp=await productApi.getAll(paramsString);
                const {data, pagination} = rp;
                // console.log("data",data);
                console.log("pagi", pagination);
                
                setProducts(data)
                setPagination(pagination);
            }
            catch(error){
                console.log('failed');
            }
            
        })();
    }, [filters]);
    

    const handleFiltersChange = (newFilters) => {
        console.log('New Filters:', newFilters);
        setFilters(
            {
                ...filters,
                _page: 1,
                title_like: newFilters.searchTerm,
            }
        )

    }

// const match = useRouteMatch();
    return (
    
        <div className={classes.root}>
            <FormSearch onSubmit={handleFiltersChange}/>
            <ProductsSearch data={products}/>
        </div>
        
    );
}

export default SearchForm;