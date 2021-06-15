import { makeStyles, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useRouteMatch } from 'react-router';
import productApi from '../../api/productApi';
import { Link, useHistory } from 'react-router-dom';

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
    const history = useHistory();
    console.log(products.id);
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
            const {data} = rp;
            console.log("thien2",data);
         
            setProducts(data);
          
        } catch (error) {
            console.log('failed');
        }
        
       })();
    },[])
    const handleOnChange = (event,value,reason) => {
        // console.log('reason',reason);
       
        if(reason === 'clear'){
            return;
            
        }else{
            history.push(`/products/${value.id}`)
        }
        
        
    };
const match = useRouteMatch();
    return (
    
        <div className={classes.root}>
          <Autocomplete
              size='small'
              id="free-solo-demo"
              freeSolo
              options={products.map((product) => (product))}
              getOptionLabel={options => options.name}
              onChange={handleOnChange}
              renderInput={(params) => (
                    
                    <TextField
                        className={classes.search}
                        {...params}
                        placeholder="Tìm kiếm"
                        margin="normal"
                        variant="outlined"   
                    >
                      
                    </TextField>
          
              )}
              
          />
        
        </div>
        
    );
}

export default SearchForm;