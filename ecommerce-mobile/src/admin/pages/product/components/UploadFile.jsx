import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import './UploadFile.scss';
import { Button } from '@material-ui/core';
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
      const handleUload = async(selectedFiles) => {
        if(onSubmitUpload){
          await onSubmitUpload(selectedFiles);
          console.log('selectedFiles',selectedFiles);
        }
    }
      const renderPhotos = (source) => {
        console.log("source: ", source);
        return source.map((photo) => {
          photo=URL.createObjectURL(photo);
          return <img src={photo} alt="" key={photo} className="imgUpload"/>;
        });
      };
    return (
        <div className="app">
                <div>
                    <input type="file" id="file" onChange={handleImageChange} />
                    <div className="label-holder">
                        <label htmlFor="file" className="label">
                        <PhotoCamera />
                        </label>
                    </div>
                <div className="result">{renderPhotos(selectedFiles)}</div>
                <div>
                  <Button onClick={handleUload} type="submit">Submit</Button>
                </div>
            </div>
            
        </div>
    );
}

export default UploadFile;