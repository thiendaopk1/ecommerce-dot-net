import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../../hooks/useProductDetail';
import AddToCartForm from '../components/AddToCartForm';
import RightContentDetail from '../components/RightContentDetail';
import ProductMenu from '../components/ProductMenu';
import ProductDescription from '../components/ProductMenu/ProductDescription';
import ProductInfomation from '../components/ProductMenu/ProductInfomation';
import ProductReview from '../components/ProductMenu/ProductReview';
import ProductContentCenter from '../components/ProductContentCenter';


DetailPage.propTypes = {
    
};
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
    },

    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        // borderRight: `1px solid ${theme.palette.grey[300]}`
    },

    center: {
        flex: '1 1 1',
        width: '500px',
        padding: theme.spacing(1.5),
        // borderRight: `1px solid ${theme.palette.grey[300]}`
    },
    right: {
        flex: '1 1 1',
        padding: theme.spacing(1.5),
        width: '300px'
    },
    
}));
function DetailPage() {
    const classes = useStyles();
    const { params: { productId }, url } = useRouteMatch();

    const { product, loading} = useProductDetail(productId);

   
    
    return (
        <Box>
            <Container>
                <Paper elevation={0} >
                    <Grid container className={classes.root}>
                        <Grid item className={classes.left}>
                        
                            <ProductThumbnail product={product}/>
                        </Grid>
                        <Grid item className={classes.center}>
                           <ProductContentCenter product={product}/>
                        </Grid>
                        <Grid item className={classes.right}>
                            <RightContentDetail product={product}/>
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />

                <Switch>
                    <Paper elevation={0} style={{ padding : '20px'}}>
                        <Grid item>
                            <Route exact path={url}>
                                <ProductDescription product={product}/>
                            </Route>
                        </Grid>

                        <Grid item>
                            <Route exact path={`${url}/infomation`}>
                                <ProductInfomation product={product}/>
                            </Route>
                        </Grid>
                        
                        <Grid item>
                            <Route exact path={`${url}/review`} component={ProductReview}/>
                        </Grid>
                    </Paper>
                    
                    
                    {/* <Route exact path={`${url}/infomation`} component={ProductInfomation}/> */}
                    
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;