import React from 'react';
import HomeProductList from './HomeProductList';

ProductHome.propTypes = {

};

function ProductHome(props) {
    return (
        <div>
            <HomeProductList title="Sản phẩm đang hot" />
            <HomeProductList title="Sản phẩm đang sale" />
            <HomeProductList title="Sản phẩm nổi bật" />
        </div>
    );
}

export default ProductHome;