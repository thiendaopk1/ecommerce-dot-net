import React from 'react';
import HomeProductList from './HomeProductList';

ProductHome.propTypes = {

};

function ProductHome(props) {
    return (
        <div>
            <HomeProductList title="Sản phẩm đang hot" loai="hot" />
            <HomeProductList title="Sản phẩm đang sale" loai="sale" />
            <HomeProductList title="Sản phẩm nổi bật" loai="noibat"/>
        </div>
    );
}

export default ProductHome;