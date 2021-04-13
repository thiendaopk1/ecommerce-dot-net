import { makeStyles } from "@material-ui/core";

const ProductDetailStyles = makeStyles(() => ({
    root :{

    },

    nameProduct: {
        display: 'flex',
        flexFlow: 'row nowrap',
    },

    title :{
        fontWeight: "800",
        // fontSize: "25px",
        // lineHeight: '1.5',
    },
    

    rate: {
        marginLeft: '15px',
        top: '10px',
        fontSize: '20px'
    },

    comment: {
        marginLeft: '15px',
        fontSize: '10px',
        top: '10px',
    },
//Price
    price: {
        marginLeft: '15px',
        fontSize: '12px',
    }, 
    

    salePrice: {
        color: '#e11b1e',
        fontWeight: "700",
        fontSize: '20px ',
    },

    originalPrice: {
        marginLeft: '10px',
        fontSize: '14px',
        fontWeight: "700",
        color: '#716b6b',
        textDecoration: 'line-through',
    },
//Ram
    box1: {
        position: 'relative',
        backgroundColor: '#fff',
        border: '1px solid #d70018',
        borderRadius: '3px',
        width: '100px',
        textAlign: 'center',
        padding: '5px 10px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    ram: {
        color: '#000',
    },

    ramPrice: {
        fontSize: '14px',
        display: 'block',
        color: '#e10c00',
        fontWeight: '700',
    },
//Color
    box2: {
        position: 'relative',
        backgroundColor: '#fff',
        border: '1px solid #d70018',
        borderRadius: '3px',
        width: '100px',
        textAlign: 'center',
        padding: '5px 10px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '10px',
    },

    colorProduct: {
        color: '#000',
    },

    colorPrice: {
        fontSize: '14px',
        display: 'block',
        color: '#e10c00',
        fontWeight: '700',
    },

    titleColor: {
        color: '#2f2f2f',
        fontWeight: '700',
    },

}));
export default ProductDetailStyles;