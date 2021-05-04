import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import img from '../../../images/banner.png';

RightContentDetail.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column',
    },

    banner: {
        
        width: '114%',
        
    },

    title: {
        marginTop: '10px',
        fontWeight: '700',
        color: '#444',
        fontSize: '15px'
    },

    content: {
        marginTop: '10px',
        color: '#444',
        fontSize: '12px'
    },
}))

function RightContentDetail({product = {}}) {
    const classes = useStyles();
    const {description} = product;
    return (
        <Box>
            <Box mt={2}>
                <Typography component="b" className={classes.title}>
                    Description:
                </Typography>
            </Box>
            <Box >
                <Typography component="span" className={classes.content}>
                   {description}
                   </Typography>
            </Box>
            <Box mt={2}>
                <Typography component="b" className={classes.title}>
                    Tình trạng:
                </Typography>
            </Box>
            <Box >
                <Typography component="span" className={classes.content}>
                    Mới 100%, fullbox, đầy đủ phụ kiện đi kèm.
               </Typography>
            </Box>
            <Box mt={2}>
                <Typography component="b" className={classes.title}>
                    Bảo hành:
                </Typography>
            </Box>
            <Box >
                <Typography component="span" className={classes.content}>
                Bảo hành chính hãng 12 tháng tại trung tâm bảo hành ủy quyền, 1 đổi 1 trong 30 ngày nếu có lỗi phần cứng từ NSX.
                </Typography>
            </Box>
            <Box mt={2}>
                <img src={img} className={classes.banner}/>
            </Box>
           
            
            
        </Box>
    );
}

export default RightContentDetail;