import { Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './UploadFile.scss';
UploadFile.propTypes = {
  onSubmitUpload: PropTypes.func,
};

function UploadFile({onSubmitUpload}) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        file
      );
      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.createObjectURL(file) // avoid memory leak
      );
    }
  };
  const handleUload = async () => {
    if(onSubmitUpload){
      const formData = new FormData();
      selectedFiles.forEach(file => {
        formData.append('files', file);
    });
      await onSubmitUpload(formData);
    }
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
        <input type="file" id="file" encType="multipart/form-data" multiple onChange={handleImageChange} />
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