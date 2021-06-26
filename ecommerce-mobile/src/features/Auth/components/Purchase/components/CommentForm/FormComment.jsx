import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import commentsApi from '../../../../../../api/commentsApi';
import { useSelector } from 'react-redux';
import FormRating from './FormRating';

FormComment.propTypes = {
    product: PropTypes.object,
    comments: PropTypes.object,
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

function FormComment({product = {}, comments = {}}) {
    const star = comments.tbcRate;
    console.log('star', star);
    const {id} = useSelector(state => state.user.current);
    const [comment, setComment] = useState();
    const  handleSubmit = (values) => { 
        (async () => {
            try {
                const result = await commentsApi.addComment(values)
                setComment(result);
            } catch (error) {
                console.error('Failed to fetch product', error);
            }
            
        })()             
    }
   
   
    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid item>
                    <Box className={classes.root}>
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