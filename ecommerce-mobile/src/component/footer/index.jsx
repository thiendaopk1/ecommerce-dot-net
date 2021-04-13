import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1232,
        marginTop:10,
        margin: 'auto',
        padding: '1% 0 2% 0',
        background:'#efefef',
        border: 'solid #eee 1px'
    },
    li:{
        listStyleType:'none',
        marginLeft:'3%',
        textDecoration:'none',
    },
}));
Footer.propTypes = {

};

function Footer(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box>
                <Grid container>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <li className={classes.li}><Link>Giới thiệu về công ty</Link></li>
                        <li className={classes.li}><Link>Câu hỏi thường gặp mua hàng</Link></li>
                        <li className={classes.li}><Link>Quy chế hoạt động</Link></li>
                        <li className={classes.li}><Link>Kiểm tra hóa đơn điện tử</Link></li>
                        <li className={classes.li}><Link>Tra cứu thông tin bảo hành</Link></li>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                            <li className={classes.li}><Link>Tin tuyển dụng</Link></li>
                            <li className={classes.li}><Link>Tin khuyến mãi</Link></li>
                            <li className={classes.li}><Link>Hướng dẫn mua onlne</Link></li>
                            <li className={classes.li}><Link>Hướng dẫn mua trả góp</Link></li>
                            <li className={classes.li}><Link>Chính sách trả góp</Link></li>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                            <li className={classes.li}>Tư vấn mua hàng (Miễn phí)</li>
                            <li className={classes.li}>1800 6601 (Nhánh 1)</li>
                            <li className={classes.li}>Hỗ trợ kỹ thuật</li>
                            <li className={classes.li}>1800 6601 (Nhánh 2)</li>
                            <li className={classes.li}>Hỗ trợ thanh toán:</li>
                    </Grid>
                </Grid>
            </Box>


            {/* <Box>
                <li>Giới thiệu về công ty</li>
                <li>Câu hỏi thường gặp mua hàng</li>
                <li>Quy chế hoạt động</li>
                <li>Kiểm tra hóa đơn điện tử</li>
                <li>Tra cứu thông tin bảo hành</li>
            </Box> */}
        </div>
    );
}

export default Footer;