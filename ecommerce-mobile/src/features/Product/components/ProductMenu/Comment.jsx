import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

Comment.propTypes = {
    comments: PropTypes.array,
};
const useStyles = makeStyles(theme => ({
    root: {
        borderBottom: '1px solid #ddd',
        padding: '10px 0px'
    },

    header: {
        display: 'flex',
        flexFlow: 'row nowrap',
        fontSize: '14px',
        marginTop: '5px'
    },

    footer:{
        display: 'flex',
        flexFlow: 'row nowrap',
        marginTop: '5px'
    },

    username: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },

    rate: {
        margin: 0,
        padding: 0,
        fontSize: '20px'
    },

    content: {
        marginLeft: '10px',

    },
}));
function Comment({comments = []}) {
 
    const classes = useStyles();
//    console.log('aloalo',comments);
    return (
        <Box>
            <Container>
                
                <Grid item >
                    {comments && comments.map((listCommentByProducts) => (
                        <Box key={listCommentByProducts.id} className={classes.root}>
                            <Box className={classes.header}>
                                <Typography className={classes.username}>
                                    {listCommentByProducts.fullName}
                                </Typography>
                                || {listCommentByProducts.createdDate}
                            </Box>
                            <Box className={classes.footer}>
                                <Rating name="read-only" value={listCommentByProducts.rate} readOnly mr={2} className={classes.rate}/>
                                <Typography className={classes.content}>{listCommentByProducts.content}</Typography>
                            </Box>
                        </Box>
                    ))}
                    
                </Grid>
            </Container>
        </Box>
    );
}

export default Comment;