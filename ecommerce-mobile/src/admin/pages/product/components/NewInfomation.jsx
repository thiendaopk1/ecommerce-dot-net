import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, Button, makeStyles } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/textField/InputField';
NewInfomation.propTypes = {
    onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 200,
      },
      btn:{
          marginLeft: '20px',
          marginTop: '25px'
      },
}))
function NewInfomation({onSubmit = null}) {
    const classes = useStyles();
    const [name, setName] = useState('');
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const form = useForm({
      defaultValues:{
          content: '',
      }
  })
  const handleSubmit = async(value) => {

      const data = {
          content: value.content,
          name: name
      }
        console.log(data);
        if(onSubmit){
            await onSubmit(data);
            console.log('123', value);
        }
  }
  console.log('form', form);
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Infomation</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select"
                value={name}
                onChange={handleChange}
                label="Infomation"
                >
                <MenuItem value="Thương hiệu">Thương hiệu</MenuItem>
                <MenuItem value="Phụ kiện đi kèm">Phụ kiện đi kèm</MenuItem>
                <MenuItem value="Công nghệ màn hình">Công nghệ màn hình</MenuItem>
                <MenuItem value="Camera trước">Camera trước</MenuItem>
                <MenuItem value="Camera sau">Camera sau</MenuItem>
                <MenuItem value="Tính năng camera">Tính năng camera</MenuItem>
                <MenuItem value="Đèn flash">Đèn flash</MenuItem>
                <MenuItem value="Video call">Video call</MenuItem>
                <MenuItem value="Quay phim">Quay phim</MenuItem>
                <MenuItem value="Bộ nhớ RAM">Bộ nhớ RAM</MenuItem>
                <MenuItem value="Bộ nhớ trong">Bộ nhớ trong</MenuItem>
                <MenuItem value="Kích thước">Kích thước</MenuItem>
                <MenuItem value="Tên chip">Tên chip</MenuItem>
                <MenuItem value="GPS">GPS</MenuItem>
                <MenuItem value="FM Radio">FM Radio</MenuItem>
                <MenuItem value="SKU">SKU</MenuItem>
                </Select>
            </FormControl>
            <InputField name="content" form={form} label="Content"/>
            <Button type="submit" variant="contained" color="primary" className={classes.btn}>Thêm</Button>
        </form>
    );
}

export default NewInfomation;