import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, LinearProgress, makeStyles, Select, Typography } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import userApi from "../../../api/userApi";
import InputField from "../../../component/Form-control/InputField";
import PasswordField from "../../../component/Form-control/passwordField";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0, 1, 0),
    width: '100%',
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {

    textAlign: 'center',
  },
  submit: {
    // margin: theme.spacing(2, 0,1, 0)
  },
  select1: {
    color: '#95727f',
    paddingTop: 16,
    paddingBottom: 8,
    border: '1px solid #bfbfc0',
    borderRadius: 3,
    marginTop: 16,
    marginBottom: 8,
  },
  lable: {
    fontSize: 18,
    marginRight: 10,
    marginLeft: 13,
  }
}));


function NewUser(props) {
  const classes = useStyles();
  const schema = yup.object().shape({
    fullName: yup.string().required('please enter your full name')
      .test('should has at least two words', 'please enter at least two words', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('please enter your email').email('please enter a valid email address'),
    password: yup.string().required('please enter your password')
      .matches("(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}", 'Password must contain at least 8 characters, including upper case letters, lower case letters, numbers and a special character'),
    //  repassword: yup.string().required('please retype your password').oneOf([yup.ref('password')],'passord does not match'),
    phone: yup.string().required('please enter your phone number').length(10, 'please enter a valid phone number').matches("((09|03|07|08|05)+([0-9]{8}))", "please enter a valid phone number"),
    address: yup.string().required('please enter your address'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      // repassword:'',
      phone: '',
      address: '',
      role:'',
    },
    resolver: yupResolver(schema),
  });
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (values) => {
    try{
    values.role=document.getElementById('role').value;
    const user =await userApi.newUser(values);
    enqueueSnackbar('add user success!', { variant: 'success' });
  } catch (error) {
    enqueueSnackbar(error.message, { variant: 'error' });
  }
  };
  const { isSubmitting } = form.formState;
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress />}

      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component='h3' variant='h5'>
        Sign Up
          </Typography>
      <form style={{ width: '60%', margin: 'auto' }} onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="repassword" label="Retype Password" form={form} />
        <InputField name="phone" label="Phone Number" form={form} />
        <InputField name="address" label="Address" form={form} />
        <div className={classes.select1}>
          <label className={classes.lable}>role</label>
          <select style={{ fontSize: 18, color: '#727273' }} name="role" id="role" form={form.setValue('role',this)}>
            <option value="1">user</option>
            <option value="2">admin</option>
          </select>
        </div>
        <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          create an Account
      </Button>
      </form>
    </div>
  );
}

export default NewUser;
