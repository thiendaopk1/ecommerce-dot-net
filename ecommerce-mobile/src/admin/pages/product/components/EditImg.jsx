import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import ClearIcon from '@material-ui/icons/Clear';

EditImg.propTypes = {
  listImgs: PropTypes.array,
  onDeleteImg: PropTypes.func,
  onSaveImg: PropTypes.func,
  onNewImg: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  iconClear: {
    '&.MuiSvgIcon-root': {
      position: 'absolute',
      top: '0',
      right: '0',
      color: 'red',
      cursor: 'pointer',
      fontSzie: '15px',
      '&:hover': {
        color: 'blue',
      },
    },
  },

  btnSaveImg: {
    marginLeft: '30px',
  },
}));
function EditImg({ listImgs = [], onDeleteImg = null, onSaveImg = null, onNewImg = null }) {
  const classes = useStyles();

  const handleDeleteImg = async (idi) => {
    if (onDeleteImg) {
      onDeleteImg(idi);
    }
  };
  const [imgList, setImgList] = useState([]);

  const handleNewImg = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) => file);
      setImgList((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.createObjectURL(file)
        // avoid memory leak
      );
    }
  };

  const handleDeleteImgUpload = async (index) => {
    let res = imgList.splice(index, 1);
    let res1 = imgList.filter((img) => img.name !== res.name);
    setImgList(res1);
  };

  const renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo, index) => {
      photo = URL.createObjectURL(photo);
      return (
        <div key={photo} className="img__features-item-upload">
          <img src={photo} alt="" className="img__features-img" />
          <ClearIcon className={classes.iconClear} onClick={() => handleDeleteImgUpload(index)} />
        </div>
      );
    });
  };
  const handleSaveImg = () => {
    if (onSaveImg) {
      const formData = new FormData();
      imgList.forEach((file) => {
        formData.append('files', file);
      });
      onSaveImg(formData);
    }
    setImgList([]);
  };

  return (
    <div className="img__features">
      <div className="img__features-title">
        <h2>Hình ảnh</h2>
      </div>
      <div className="img__features-list">
        {listImgs.map((img) => (
          <div key={img.id} className="img__features-item">
            <img src={img.image} alt="" className="img__features-img" />
            <ClearIcon className={classes.iconClear} onClick={() => handleDeleteImg(img.id)} />
          </div>
        ))}

        <div className="img__features-list-upload">{renderPhotos(imgList)}</div>
      </div>
      <div className="img__features-buttons">
        <div className="button-img" onChange={handleNewImg}>
          <input
            type="file"
            encType="multipart/form-data"
            multiple
            id="new-img"
            className="new-img"
            hidden
          />
          <label htmlFor="new-img" className="new-img-label">
            <PhotoCamera className={classes.newImg} />
          </label>
        </div>
        <div className="button-save">
          {imgList.length === 0 && (
            <Button className={classes.btnSaveImg} variant="contained" disabled>
              Save
            </Button>
          )}
          {imgList.length > 0 && (
            <Button
              className={classes.btnSaveImg}
              variant="contained"
              color="primary"
              onClick={handleSaveImg}
            >
              Save
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default EditImg;
