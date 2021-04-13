import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, Collapse, Grid, List, ListItem, ListItemText, ListSubheader, makeStyles, TextField } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1232,
        margin: 'auto',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: '30%',
    },
    large: {
        width: '60%',
        height: '50%',
        margin:'6% 3% 2% 6%',
    },
    ten:{
        marginLeft:'13%',
    },
    menu: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    left:{
        width:'20%',
    },
    right: {
        flex: '1 1 0',
        background: '#fff',
        borderRadius: 6,
    },
    title: {
        borderBottom: 'solid 1px #efefef',
        padding: '2% 0 2% 1%',
        margin: 0,
    },
    text:{
        width:'60%',
        margin:'3% 0 0 3%',
    },
    info:{
        marginTop:'2%',
    },
}));
UserInfo.propTypes = {
    onSubmit: PropTypes.func,
};
function UserInfo(props) {
    const classes = useStyles();
    const loggedInUser = useSelector(state => state.user.current);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    const schema = yup.object().shape({
        fullName: yup.string().required('please enter your full name')
            .test('should has at least two words', 'please enter at least two words', (value) => {
                return value.split(' ').length >= 2;
            }),
        email: yup.string().required('please enter your email').email('please enter a valid email address'),
        password: yup.string().required('please enter your password')
            .matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}", 'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character'),
        retypePassword: yup.string().required('please retype your password').oneOf([yup.ref('password')], 'passord does not match'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }

    };
    const { isSubmitting } = form.formState;
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item >
                    <List component="nav" aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                <div>
                                    <Avatar style={{ float: 'left', margin: '5% 3% 0 2%' }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.small} />
                            {loggedInUser.fullName}
                            </div>
                            </ListSubheader>
                        }
                        className={classes.menu}
                    >
                        <ListItem button>
                            {/* <ListItemIcon>
          <SendIcon />
        </ListItemIcon> */}
                            <ListItemText primary="Thông tin cá nhân" />
                        </ListItem>
                        <ListItem button>
                            {/* <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon> */}
                            <ListItemText primary="Đổi mật khẩu" />
                        </ListItem>
                        <ListItem button onClick={handleClick}>
                            {/* <ListItemIcon>
          <InboxIcon />
        </ListItemIcon> */}
                            <ListItemText primary="Đơn hàng của tôi" />
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    {/* <ListItemIcon>
              <StarBorder />
            </ListItemIcon> */}
                                    <ListItemText primary="Starred" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Grid>
                <Grid item className={classes.right}>
                    <h2 className={classes.title}>Thông tin của bạn</h2>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                            <p className={classes.ten}>{loggedInUser.fullName}</p>
                        </Grid>
                        <Grid item>
                            <form onSubmit={form.handleSubmit(handleSubmit)}>
                                <TextField className={classes.text} name="fullName" label="Full Name" value={loggedInUser.fullName} form={form} />
                                <TextField className={classes.text} name="email" value={loggedInUser.email} label="Email" form={form} />
                                <TextField className={classes.text} name="phoneNunber" value={loggedInUser.email} label="phone number" form={form} />
                                <TextField className={classes.text} name="address" value={loggedInUser.email} label="address" form={form} />
                                <Button disabled={isSubmitting} type="submit" className={classes.text} variant="contained" color="primary" fullWidth>
                                    save
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default UserInfo;