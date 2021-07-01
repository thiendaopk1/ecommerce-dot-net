import { Box, Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import InputField from '../Form-control/InputField/index'
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
    img:{
        marginRight:10,
    },
}));
Footer.propTypes = {

};

function Footer(props) {
    const form = useForm({
        defaultValues:{
            email:'',  
        },
    })
    const handleSubmit=(value)=>{
        console.log(value)
    }
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
                            <li className={classes.li}><Link>Hướng dẫn mua online</Link></li>
                            <li className={classes.li}><Link>Hướng dẫn mua trả góp</Link></li>
                            <li className={classes.li}><Link>Chính sách trả góp</Link></li>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                            <li className={classes.li}>Tư vấn mua hàng (Miễn phí):</li>
                            <li className={classes.li}>1800 6601 (Nhánh 1)</li>
                            <li className={classes.li}>Hỗ trợ kỹ thuật:</li>
                            <li className={classes.li}>
                                <form onSubmit={form.handleSubmit(handleSubmit)}>
                                    <InputField style={{maxWidth:"80%"}} name="email" label="Email" form={form}/>
                                    <Button style={{background:'blue',color:'#fff'}} type='submit'>gửi</Button>
                                </form>
                            </li>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                            <li className={classes.li}>Hỗ trợ thanh toán:</li>
                            <li className={classes.li}><a href=""><img className={classes.img} width="60" height="40" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5hE04TWXxoPrf3xint3iIOhQdxmdiovzbcQ&usqp=CAU"/></a>
                            <a href=""><img className={classes.img} width="60" height="40" src="data:image/png;base64,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"/></a></li>
                            <li className={classes.li}>1800 6601 (Nhánh 2)</li>
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