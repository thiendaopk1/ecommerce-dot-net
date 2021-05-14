import { makeStyles, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@material-ui/lab';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import productApi from '../../api/productApi';
import queryString from 'query-string';
// import SearchForm from '../search';

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
            console.log("param",params2);
            const rp=await productApi.getAll();
            const {data} = rp;
            console.log("data",data);
         
            setProducts(data);
          
        } catch (error) {
            console.log('failed');
        }
        
       })();
    },[])


    return (
        <div className={classes.root}>
            <Autocomplete
                size='small'
                id="free-solo-demo"
                freeSolo
                options={products.map((product) => (product.name))}
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

// const products = ({product = {}}) => {
//     // const { name, images } = product;

//     return (
//         <>
//             <p>
//                 <img src={product.images[0].image} alt={product.name}/>
//             </p>
//             <p>
//                 {product.name}
//             </p>

//         </>
//     )
// }

export default SearchForm;