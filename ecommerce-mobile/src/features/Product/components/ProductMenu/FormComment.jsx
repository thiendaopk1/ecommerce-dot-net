import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import FormRating from './FormRating';
import StarIcon from '@material-ui/icons/Star';
import commentsApi from '../../../../api/commentsApi';
import axios from 'axios';
import { useSelector } from 'react-redux';

FormComment.propTypes = {
    product: PropTypes.object,
};
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        border: '1px solid #ddd',
        padding: '20px 0px',
        height: '150px'
    },

    left: {
        display: 'flex',
        width: '20%',
       
        borderRight: '1px solid #ddd',
        flexFlow: 'column'
        
    },
    
    title: {
        display: 'flex',
        justifyContent: 'center',
    },

    rates: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '40px',
        color: '#fd9727',
        marginTop: '2px'
        
    },
    star:{
        fontSize: '50px',
        color: '#fd9727'
    },

    right: {
        width: '80%',
        // display: 'flex'
        marginLeft: '10px',
        marginRight: '20px'
    },

    
    

}))

function FormComment({product = {}}) {
    const {id} = useSelector(state => state.user.current);
    const handleSubmit = (values) => { 
        axios.post('https://localhost:5001/api/comment/new', {
            ...values,
            userId: id
            
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      
            
            
    }
   
   
    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid item>
                    <Box className={classes.root}>
                        <Box className={classes.left}>
                            <Box className={classes.title}>
                                <h4> Tổng số sao</h4>
                            </Box>
                            <Box component="p" className={classes.rates}> 
                                <span>1</span>
                                <StarIcon className={classes.star}/>
                            </Box>
                        </Box>
                        <Box className={classes.right}>
                            <FormRating onSubmit={handleSubmit} product={product}/>
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default FormComment;