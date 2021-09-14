import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Close } from '@material-ui/icons';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import brandsApi from '../../../../api/brandsApi';
import ramsApi from '../../../../api/ramsApi';
import romsApi from '../../../../api/romsApi';
import AreaField from '../../../components/textField/AreaField';
import InputField from '../../../components/textField/InputField';
import NewBrands from '../components/NewBrands';
import Infomation from './Infomation';
import NewRams from './NewRams';
import NewRoms from './NewRoms';
import productApi from '../../../../api/productApi';
import EditImg from './EditImg';
EditProduct.propTypes = {
  product: PropTypes.object,
  roms: PropTypes.array,
  brands: PropTypes.array,
  rams: PropTypes.array,
  onSubmit1: PropTypes.func,
  onSubmit2: PropTypes.func,
  onSubmit3: PropTypes.func,
  onSubmitEdit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginLeft: '60px',
  },

  options: {
    display: 'flex',
    flexFlow: 'row nowrap',
    marginLeft: '70px',
  },

  select: {
    display: 'flex',
    flexFlow: 'row nowrap',
  },

  formControl: {
    margin: theme.spacing(1),
  },

  checkbox: {
    // marginLeft: '50px',
    padding: '40px 50px',
  },

  select: {
    margin: '10px 20px',
    padding: '0px 0px',
  },

  buttonSelect: {
    marginTop: '20px',
  },

  box: {
    display: 'flex',
    flexFlow: 'row nowrap',
    margin: '20px 20px',
  },

  label: {
    height: '18px',
    marginTop: '16px',
    padding: '19px 19px',
    fontWeight: '500',
    color: '#ababab',
    width: '130px',
    textAlign: 'center',
    // background: 'green'
  },

  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  textarea: {},

  editor: {
    marginTop: '30px',
  },

  btn: {
    // display: 'flex',
    float: 'right',
    marginRight: '60px',
    marginTop: '20px',
  },

  btn1: {
    marginRight: '10px',
  },

  btn2: {
    marginLeft: '10px',
  },
  input: {
    // display: 'none',
  },
}));

function EditProduct({
  product = {},
  roms,
  rams,
  brands,
  onSubmit1,
  onSubmit2,
  onSubmit3,
  onSubmitEdit,
}) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();

  const handleCancel = () => {
    history.push('/Admin/products');
  };
  //editor

  const blocksFromHTML = convertFromHTML(product.longDescription);
  const state = ContentState.createFromBlockArray(
    blocksFromHTML.contentBlocks,
    blocksFromHTML.entityMap
  );
  const [editorState, setEditorState] = useState(() => EditorState.createWithContent(state));

  //end editor

  //inputField and checkbox
  const [isHot, setIsHot] = useState(false);
  const [isSale, setIsSale] = useState(false);
  const handleChange = (event) => {
    setIsHot(event.target.checked);
  };
  const handleChange1 = (event) => {
    setIsSale(event.target.checked);
  };

  const form = useForm({
    defaultValues: {
      name: product.name,
      originalPrice: product.originalPrice,
      promotionPercents: product.promotionPercents,
      description: product.description,
      amount: product.amount,
    },
  });

  //select
  // brand
  const [openBrand, setOpenBrand] = useState(false);
  const handleClickOpenBrand = () => {
    setOpenBrand(true);
  };
  const handleCloseBrand = () => {
    setOpenBrand(false);
  };

  const brandName = product.brand.id;

  const [brandsList, setBrandsList] = useState(brandName);

  const handleChangeSelectBrand = (event) => {
    setBrandsList(event.target.value);
  };

  const handleSubmitbrand = async (value) => {
    try {
      const res = await brandsApi.add(value);

      onSubmit1(res);
      enqueueSnackbar('Thêm brand thành công', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  // end brand
  // rom
  const [openRom, setOpenRom] = useState(false);
  const handleClickOpenRom = () => {
    setOpenRom(true);
  };
  const handleCloseRom = () => {
    setOpenRom(false);
  };

  const romName = product.rom.id;

  const [romList, setRomList] = useState(romName);

  const handleChangeSelectRom = (event) => {
    setRomList(event.target.value);
  };

  const handleSubmitRom = async (value) => {
    try {
      const res = await romsApi.add(value);

      onSubmit2(res);
      enqueueSnackbar('Thêm rom thành công', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  // end rom
  // ram
  const [openRam, setOpenRam] = useState(false);
  const handleClickOpenRam = () => {
    setOpenRam(true);
  };
  const handleCloseRam = () => {
    setOpenRam(false);
  };

  const ramName = product.ram.id;

  const [ramList, setRamList] = useState(ramName);

  const handleChangeSelectRam = (event) => {
    setRamList(event.target.value);
  };

  const handleSubmitRam = async (value) => {
    try {
      const res = await ramsApi.add(value);

      onSubmit3(res);
      enqueueSnackbar('Thêm ram thành công', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  // end ram
  //end select
  const { id } = product;

  const [arrInfo, setArrInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const list = await productApi.getAllInfo(id);
        setArrInfo(list);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [product]);

  const handleDeleteInfo = async (listInfo) => {
    // const list = await productApi.getAllInfo(id);
    setArrInfo(listInfo);
    // setArrInfo([...arrInfo])
  };

  const handleSubmitInfo = (data) => {
    setArrInfo([...arrInfo, data]);
  };

  const handleSubmit = async (value) => {
    const data = {
      promotionPercents: value.promotionPercents,
      name: value.name,
      originalPrice: value.originalPrice,
      description: value.description,
      amoutSold: product.amoutSold,
      amount: value.amount,
      isHot,
      isSale,
      brandId: brandsList,
      ramId: ramList,
      romId: romList,
      longDescription: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    };
    if (onSubmitEdit) {
      await onSubmitEdit(data);
      history.push('/Admin/products');
    }
  };

  //   imgages
  const [listImgs, setListImgs] = useState([]);
  console.log('listImgs', listImgs);
  useEffect(() => {
    (async () => {
      try {
        const list = await productApi.getImg(id);
        const { data } = list;
        setListImgs(data);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  const handleDeleteImg = async (idi) => {
    try {
      const item = await productApi.removeImg(id, idi);
      let resImg = listImgs.filter((img) => img.id !== item.id);
      setListImgs(resImg);
    } catch (error) {
      console.log('error', error);
    }
  };
  //   const flatten = (arr) => {
  //     return arr.reduce((a, b) => {
  //       return a.concat(Array.isArray(b) ? flatten(b) : b);
  //     }, []);
  //   };
  const handleSaveImg = async (value) => {
    console.log('id', id);
    try {
      const res = await productApi.uploadImgs(value, id);
      console.log('res', res);

      let listArr = listImgs.concat(res);

      setListImgs(listArr);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleNewImg = async (filesArray, e) => {
    console.log('filesArray', filesArray);
    setListImgs((listImgs) => listImgs.concat(filesArray));
    Array.from(e.target.files).map(
      (file) => URL.createObjectURL(file)
      // avoid memory leak
    );
  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      photo = URL.createObjectURL(photo);
      return <img src={photo} alt="" key={photo} className="imgUpload" />;
    });
  };
  return (
    <Box>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <h3 style={{ textAlign: 'center', color: 'red', fontSize: '30px', padding: '25px 25px' }}>
          Edit Product
        </h3>
        {/* Start InputField */}

        <Box className={classes.root} xs={12}>
          <Box className={classes.box}>
            <InputField name="name" form={form} label="name" />
          </Box>
          <Box className={classes.box}>
            <InputField name="originalPrice" form={form} label="Original Price" />
          </Box>
          <Box className={classes.box}>
            <InputField name="promotionPercents" form={form} label="Promotion Percents" />
          </Box>
        </Box>
        <Box className={classes.root} xs={12}>
          <Box className={classes.box}>
            <InputField name="amount" form={form} label="Amount" />
          </Box>
          {/* check box */}
          <Box className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isHot.true}
                  onChange={handleChange}
                  name="isHot"
                  color="primary"
                />
              }
              label="isHot"
              style={{ marginRight: '100px' }}
            />

            <FormControlLabel
              control={
                <Checkbox
                  checked={isSale.true}
                  onChange={handleChange1}
                  name="isSale"
                  color="primary"
                />
              }
              label="isSale"
            />
          </Box>
          {/* end check box */}
        </Box>

        {/* End InputField */}

        <Box>
          {/* Start Select */}
          <Box className={classes.options}>
            <Box className={classes.select}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Brands</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={brandsList}
                  onChange={handleChangeSelectBrand}
                  style={{ width: '130px' }}
                  label="Brand"
                >
                  {brands.map((brand) => (
                    <MenuItem key={brand.id} value={brand.id}>
                      {brand.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button
                onClick={handleClickOpenBrand}
                className={classes.buttonSelect}
                startIcon={<AddBoxIcon />}
              >
                New Brand
              </Button>
            </Box>

            <Box className={classes.select}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Rom</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={romList}
                  onChange={handleChangeSelectRom}
                  style={{ width: '130px' }}
                  label="Rom"
                >
                  {roms.map((rom) => (
                    <MenuItem key={rom.id} value={rom.id}>
                      {rom.rom}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                onClick={handleClickOpenRom}
                className={classes.buttonSelect}
                startIcon={<AddBoxIcon />}
              >
                New Rom
              </Button>
            </Box>

            <Box className={classes.select}>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Ram</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={ramList}
                  onChange={handleChangeSelectRam}
                  style={{ width: '130px' }}
                  label="Ram"
                >
                  {rams.map((ram) => (
                    <MenuItem key={ram.id} value={ram.id}>
                      {ram.ram}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                onClick={handleClickOpenRam}
                className={classes.buttonSelect}
                startIcon={<AddBoxIcon />}
              >
                New Ram
              </Button>
            </Box>
          </Box>
          {/* End Select */}
        </Box>
        <Box style={{ marginLeft: '25px' }}>
          <AreaField
            name="description"
            form={form}
            className={classes.textarea}
            label="Description"
          />
        </Box>
        <Box className={classes.editor}>
          <InputLabel className={classes.label}>Long Description:</InputLabel>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            editorStyle={{
              height: '250px',
              width: '85%',
              marginLeft: '60px',
              border: '1px solid #F1F1F1',
            }}
            toolbarStyle={{ width: '84%', marginLeft: '60px' }}
          />
        </Box>
        <Box className={classes.btn}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className={classes.btn1}
          >
            SAVE
          </Button>
          <Button
            onClick={handleCancel}
            variant="contained"
            color="primary"
            size="large"
            className={classes.btn2}
          >
            CANCEL
          </Button>
        </Box>
      </form>
      <Box>
        <EditImg
          onNewImg={handleNewImg}
          renderPhotos={renderPhotos}
          onDeleteImg={handleDeleteImg}
          onSaveImg={handleSaveImg}
          listImgs={listImgs}
        />
      </Box>
      <Box>
        <Infomation
          informations={arrInfo}
          onSubmitInfo={handleSubmitInfo}
          onSubmitDelete={handleDeleteInfo}
          product={product}
        />
      </Box>
      {/* form brand */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openBrand}
        onClose={handleCloseBrand}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseBrand} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <NewBrands closeDialog={handleCloseBrand} onSubmit1={handleSubmitbrand} />
        </DialogContent>
      </Dialog>
      {/* end form brand */}
      {/* form rom */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openRom}
        onClose={handleCloseRom}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseRom} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <NewRoms closeDialog={handleCloseRom} onSubmit2={handleSubmitRom} />
        </DialogContent>
      </Dialog>
      {/* end form rom */}
      {/* form ram */}
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openRam}
        onClose={handleCloseRam}
        aria-labelledby="form-dialog-title"
      >
        <IconButton onClick={handleCloseRam} className={classes.closeButton}>
          <Close />
        </IconButton>
        <DialogContent>
          <NewRams closeDialog={handleCloseRam} onSubmit3={handleSubmitRam} />
        </DialogContent>
      </Dialog>
      {/* end form ram */}
    </Box>
  );
}

export default EditProduct;
