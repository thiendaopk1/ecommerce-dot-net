import { makeStyles } from "@material-ui/core";

const ProductDetailStyles = makeStyles(() => ({
    root :{

    },

    nameProduct: {
        
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
    selected: {
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

    colors: {
        paddingLeft: '0px',
        display: 'flex',
        flexFlow: 'row nowrap',
    },

    box2: {
        
        listStyle: 'none',
        position: 'relative',
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '3px',
        width: '150px',
        textAlign: 'center',
        padding: '5px 10px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        marginRight: '5px',
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
//Promotion Wapper
    promotionWapper: {
        border: '#e11b1e solid 1px',
        borderRadius: '4px',
        padding: '10px 0 0',
        position: 'relative',
        overflow: 'visible',
        margin: '30px 0',
        float: 'left',
        width: '100%'
    },
    promotionHeader: {
        background: '#e11b1e',
        borderRadius: '13px',
        color: '#fff',
        fontSize: '14px',
        fontWeight: '400',
        position: 'relative',
        top: '-22px',
        left: '10px',
        verticalAlign: 'middle',
        lineHeight: '26px',
        clear: 'both',
        padding: '0 18px',
        testTransform: 'uppercase',
    },
    iconGift: {
        fontSize: '14px',
        marginRight:'6px',
        width: '16px',
        height: '15px',
        
    },

    titleKM: {
        position: 'relative',
        marginLeft: '15px',
        top: '-8px',
    },
    KMH: {
        fontSize: '14px',
    },
    TTKM: {
        color: '#e11b1e',
        listStyleType: 'disc',
        cursor: 'pointer'
    },
}));
export default ProductDetailStyles;