import { makeStyles } from "@material-ui/core";
import img from '../../../images/tagSale.png';

const ProductStyles = makeStyles(() => ({
    rate: {
        fontSize: "1rem",
    },

    comment: {
        fontSize: "0.75rem",
    },

    originalPrice: {
        textDecoration: "line-through",
        fontSize: "0.65rem",
    },

    salePrice: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "red",
        
    },

    image:{
        weight: "100%",
        height: "100%",
        left: "0",
        right: "0",
        position: "relative",
    },

    percent: {
        width: "39px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 0 5px!important",
        margin: "0 !important",
        fontSize: "12px",
        position: "absolute",
        right: "0",
        overflow: "hidden",
        color: "#fff",
        fontWeight: "700",
        // top: "-25px",
        

        //tagSale
        backgroundImage: `url(${img})`,


    },
   

}));

export default ProductStyles;