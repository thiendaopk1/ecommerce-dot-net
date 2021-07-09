import { Box, Container, Grid, Link, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import productApi from '../../../api/productApi';
import ProductList from '../../Product/components/ProductList';
import ProductSkeletonList from '../../Product/components/ProductSkeletonList';


const useStyles = makeStyles(theme => ({
    contai: {
        border: 'solid #eee 1px'
    },

    right: {
        marginTop: 5,
        flex: 1,
    },
    title: {
        marginTop:5,
        padding: '1% 0 0 1%',
        color: '#cd1817',
    },
}))

function HomeProductList(props) {
    const title =props.title;
    let _page="1";
    let isHot="0";
    const loai=props.loai;
    if(loai =='hot'){
        isHot = "1"
    }else if (loai =='noibat'){
        _page = "2"
    }else{
        _page = "3"
    }
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [filters, setFilters] = useState({
        isHot,
        _page,
        _limit: 4,
        // _sort: 'salePrice:ASC'
    });

    useEffect(() => {
        (async () => {
            try{
                const {data, pagination} = await productApi.getAll(filters);
                
                setProductList(data);
             
            }
            catch(error){
                console.log('failed');
            }
            setLoading(false);
        })();
    }, [filters]);
const match = useRouteMatch();
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.right}>
                        <Paper className={classes.contai} elevation={0}>
                            <h1 className={classes.title}>{title} </h1>
                            
                                {loading ? <ProductSkeletonList length={4}/> : <ProductList data={productList}/>}
                          
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomeProductList;