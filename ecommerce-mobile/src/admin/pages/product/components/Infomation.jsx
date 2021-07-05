import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import InputField from '../../../components/textField/InputField';

Infomation.propTypes = {
    
};

function Infomation(props) {
  const [name, setName] = useState('');
    console.log('name infomation', name);
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const form = useForm({
      defaultValues:{
          content: '',
      }
  })
  const handleSubmit = (value) => {
      console.log('value', value);
      const data = {
          content: value.content,
          name: name
      }
      console.log(data);
  }
  console.log('form', form);
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormControl >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                onChange={handleChange}
                >
                <MenuItem value="Thương hiệu">Thương hiệu</MenuItem>
                <MenuItem value="Phụ kiện đi kèm">Phụ kiện đi kèm</MenuItem>
                <MenuItem value="Công nghệ màn hình">Công nghệ màn hình</MenuItem>
                <MenuItem value="Camera trước">Camera trước</MenuItem>
                <MenuItem value="Camera sau">Camera sau</MenuItem>
                <MenuItem value="Tính năng camera">Tính năng camera</MenuItem>
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
            <InputField name="content" form={form}/>
            <Button type="submit">Enter</Button>
        </form>
    );
}

export default Infomation;