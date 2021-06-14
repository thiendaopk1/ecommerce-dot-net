import { makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router';
import productApi from '../../api/productApi';
import { Link } from 'react-router-dom';

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
    console.log(products.id);
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _limit: 253,
            // _count: 253,
            
        };
    }, [location.search]);
    
    useEffect(() => {
       (async () => {
        try {
            const params2={...queryParams};
            console.log("param",params2);
            const rp=await productApi.getAll(params2);
            const {data} = rp;
            console.log("thien2",data);
         
            setProducts(data);
          
        } catch (error) {
            console.log('failed');
        }
        
       })();
    },[])

const match = useRouteMatch();
    // const product = rp.product;
    return (
    // <Link to={`/products/${product.id}`}>
        <div className={classes.root}>
          
          <Autocomplete
              size='small'
              id="free-solo-demo"
              freeSolo
              options={products.map((product) => (product.name))}
              renderInput={(params) => (
                  
                //   <Link to={`products/${products.id}`}>
                    <TextField
                        className={classes.search}
                        {...params}
                        placeholder="Tìm kiếm"
                        margin="normal"
                        variant="outlined"   
                    >
                    </TextField>
                //   </Link>
              
              
              )}
              
          />
    
        </div>
    // </Link>
        
    );
}

export default SearchForm;