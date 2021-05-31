import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import React, { useState } from 'react';

Comment.propTypes = {
    
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
function Comment(props) {
    const [value, setValue] = useState(2);
    
    const classes = useStyles();
   
    return (
        <Box>
            <Container>
                
                <Grid item className={classes.root}>
                    <Box className={classes.header}>
                        <Typography className={classes.username}>
                            Nguyễn văn a
                        </Typography>
                        || Ngày 31/2/2021
                    </Box>
                    <Box className={classes.footer}>
                        <Rating name="read-only" value={value} readOnly mr={2} className={classes.rate}/>
                        <Typography className={classes.content}>Sản phẩm chất lượng, giao hàng nhanh</Typography>
                    </Box>
                </Grid>
            </Container>
        </Box>
    );
}

export default Comment;