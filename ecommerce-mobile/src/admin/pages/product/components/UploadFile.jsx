import { Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import productApi from '../../../../api/productApi';
import './UploadFile.scss';
UploadFile.propTypes = {
  onSubmitUpload: PropTypes.func,
};

function UploadFile({onSubmitUpload}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        file
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.createObjectURL(file) // avoid memory leak
      );
    }
  };
  const handleUload = async () => {
    if(onSubmitUpload){
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "file", 
        selectedFiles[0], 
        selectedFiles[0].name 
      ); 
      await onSubmitUpload(formData);
    }
    // try {
    //   console.log(selectedFiles);
    //   // Create an object of formData 
     
    //   const res = await productApi.uploadImg(formData, idProduct);
    //   console.log('handleUpload', res);
    //   // enqueueSnackbar('Thêm image thành công', {variant: 'success'});
    // } catch (error) {
    //   // enqueueSnackbar(error.message, {variant: 'error'});
    // }
  }
  const renderPhotos = (source) => {
    console.log("source: ", source);
    return source.map((photo) => {
      photo = URL.createObjectURL(photo);
      return <img src={photo} alt="" key={photo} className="imgUpload" />;
    });
  };
  return (
    <div className="app">
      <div>
        <input type="file" id="file" encType="multipart/form-data" onChange={handleImageChange} />
        <div className="label-holder">
          <label htmlFor="file" className="label">
            <PhotoCamera />
          </label>
        </div>
        <div className="result">{renderPhotos(selectedFiles)}</div>
        <div>
          <Button onClick={handleUload}>Submit</Button>
        </div>
      </div>

    </div>
  );
}

export default UploadFile;