import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useMemo, useState } from 'react';
import productApi from '../../../api/productApi';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import { useHistory,useLocation } from 'react-router-dom';
import queryString from 'query-string';
import FilterSkeletonList from '../components/FilterSkeletonList';
import FilterViewer from '../components/FilterViewer';



const useStyles = makeStyles(theme => ({
    root: {},

    left: {
        width: '250px',
        border: "0.5px"
    },

    right: {
        flex: '1 1 0'
    },
    pagination: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',

        marginTop: '20px',
        paddingBottom: '20px',
    }
}))

function ListPage(props) {
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);

        return {
            ...params,
            _page: Number.parseInt(params._page)|| 1,
            _limit: Number.parseInt(params._limit) || 12,
            _sort: params._sort ||'salePrice:asc',
        };
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 12,
        total: 10,
        page: 1,
    });
    const [loading, setLoading] = useState([true]);
   

    useEffect(() => {
        (async () => {
            try{
                const params2={...queryParams};
            
                const rp=await productApi.getAll(params2);
                const {data, pagination} = rp;
               
                // console.log("pagi", pagination);
                setProductList(data);
                
                setPagination(pagination);
            }
            catch(error){
                console.log('failed');
            }
            setLoading(false);
        })();
    }, [queryParams]);
//handle pagination
const handlePageChange = (e, page) => {

    const filters = {
        ...queryParams,
        _page: page,
    };
    history.push({
        pathName: history.location.pathName,
        search: queryString.stringify(filters),
    });
};
//handle sort
const handleSortChange = (newSortValue) => {
    
    const filters = {
        ...queryParams,
        _sort: newSortValue,
    };
    history.push({
        pathName: history.location.pathName,
        search: queryString.stringify(filters),
    });
    
};
//handle filter 
const handelFiltersChange = (newFilters) => {
  
    const filters = {
        ...queryParams,
        ...newFilters,
    };
    history.push({
        pathName: history.location.pathName,
        search: queryString.stringify(filters),
    });
    
};

const setNewFilter = (newFilters) => {
    history.push({
        pathName: history.location.pathName,
        search: queryString.stringify(newFilters),
    });
}

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        {loading ? <FilterSkeletonList length={1}/> : <ProductFilters filters={queryParams} onChange={handelFiltersChange}/>}
                        
                        
        
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={queryParams._sort} onChange={handleSortChange}/>
                            <FilterViewer filters={queryParams} onChange={setNewFilter}/>

                            {loading ? <ProductSkeletonList length={12}/> : <ProductList data={productList}/>}
                            
                            <Box className={classes.pagination}>
                                <Pagination 
                                color="secondary" 
                                count={Math.ceil(pagination._total / pagination._limit)} 
                                _page={pagination._page}
                                onChange={handlePageChange}
                                >
                                </Pagination>
                            </Box>
                            
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;