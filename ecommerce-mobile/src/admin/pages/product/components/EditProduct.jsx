import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { DialogContent, Box, Button, makeStyles, Select,InputLabel, FormControlLabel,Checkbox, Dialog  } from '@material-ui/core';
import InputField from '../../../components/textField/InputField';
import { DataUsageSharp, TvRounded } from '@material-ui/icons';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw  } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { FormControl } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { AccountCircle, Close } from '@material-ui/icons';
import NewBrands from '../components/NewBrands'
import brandsApi from '../../../../api/brandsApi';
import { useSnackbar } from 'notistack';

EditProduct.propTypes = {
   product: PropTypes.object,
   roms: PropTypes.array,
   brands: PropTypes.array,
   rams: PropTypes.array, 
   onSubmit: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    box: {
        display:'flex',
        flexFlow:'row nowrap',
        margin: '20px 20px',
    
    },

    label:{
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
}))
function EditProduct({product = {},roms,rams,brands,onSubmit}) {
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    
    //editor

    const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
    );
  
    //end editor

    //inputField and checkbox
    const [isHot, setIsHot] = useState(
        false
    );
    const [isSale, setIsSale] = useState(
        false
   );
    const handleChange = (event) => {
        setIsHot(event.target.checked);
      };
    const handleChange1 = (event) => {
        setIsSale(event.target.checked);
      };
    
    const form = useForm({
        defaultValues:{
            name: product.name,
            originalPrice: product.originalPrice,
            promotionPercents: product.promotionPercents,
            description: product.description
        }
    });

    //select
    const [openBrand, setOpenBrand] = useState(false);
    const handleClickOpenBrand = () => {
        setOpenBrand(true);
      };
      const handleCloseBrand = () => {
        setOpenBrand(false);
      };

    const brandName = product.brand?.name;
    
    const [brandsList, setBrandsList] = useState(brandName);
    
    const handleChangeSelect = (event) => {
        setBrandsList(event.target.value);
    };

    //end select

    const handleSubmit = async(value) => {
        const data = {
            value: value,
            isHot,
            isSale,
            brandsList,
            longDescription: draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }
        console.log(data);
    }

    const handleSubmitbrand = async(value) => {
        console.log('edit product', value)
        try {
            const res = await brandsApi.add(value);
            console.log('edit res', res);
            onSubmit(res);
            enqueueSnackbar('Thêm brand thành công', {variant: 'success'});
        } catch (error) {
            enqueueSnackbar(error.message, {variant: 'error'});
        }
    };
    return (
        <Box>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Box className={classes.box}>
                <InputLabel className={classes.label}>Name:</InputLabel >
                <InputField name="name" form={form}/>
            </Box>
            <Box className={classes.box}>
                <InputLabel className={classes.label}>Original Price:</InputLabel >
                <InputField name="originalPrice" form={form}/>
            </Box>
            <Box className={classes.box}>
                <InputLabel className={classes.label}>Promotion Percents:</InputLabel >
                <InputField name="promotionPercents" form={form}/>
            </Box>
            <Box className={classes.box}>
                <InputLabel className={classes.label}>Description:</InputLabel >
                <InputField name="description" form={form}/>
            </Box>
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
            <Editor
                editorState={editorState}
                onEditorStateChange={setEditorState}
                value={product.longDescription}
            />

        <FormControl className={classes.formControl} >
            <InputLabel id="demo-simple-select-label">Brands</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brandsList}
                onChange={handleChangeSelect}
            >
            {brands.map(brand => (
                <MenuItem key={brand.id} value={brand.id}>{brand.name}</MenuItem>
            ))}
           
            </Select>
        </FormControl>
        <Button onClick={handleClickOpenBrand}>New Brand</Button>
            <Button type="submit">Submit</Button>

        
        </form>
        {/* form brand */}
        <Dialog disableBackdropClick disableEscapeKeyDown open={openBrand} onClose={handleCloseBrand} aria-labelledby="form-dialog-title">
            <IconButton onClick={handleCloseBrand} className={classes.closeButton}>
                <Close />
            </IconButton>
            <DialogContent>
                <NewBrands closeDialog={handleCloseBrand} onSubmit={handleSubmitbrand}/>
            </DialogContent>
        </Dialog>
        {/* end form brand */}
        </Box>
        
    );
}

export default EditProduct;