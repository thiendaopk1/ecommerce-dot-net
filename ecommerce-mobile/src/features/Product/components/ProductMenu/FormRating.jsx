import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { default as React } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../component/Form-control/InputField';

FormRating.propTypes = {
    onSubmit: PropTypes.func,
};

function FormRating(props) {

    // const schema = yup.object().shape({
    //     fullName: yup.string().required('please enter your full name')
    //    .test('should has at least two words', 'please enter at least two words',(value) => {
    //        return value.split(' ').length>=2;
    //    }),
    // });

    // const form = useForm({
    //     defaultValues:{
    //         fullname: '',
    //     }
    // });

    // const handleSubmit = async (values) => {
    //     const { onSubmit } = props;
    //     if(onSubmit){
    //         await onSubmit(values);
    //     }
    // }
    // const {isSubmitting} = form.formState;
    return (
        // <form onSubmit={form.handleSubmit(handleSubmit)}>
        //     <InputField name="fullname" form="form" label="Full Name"/>
        //     <Button type="summit" variant="contained" color="primary" size="small">Binh luan</Button>
        // </form>
        <div>
            
        </div>
    );
}

export default FormRating;