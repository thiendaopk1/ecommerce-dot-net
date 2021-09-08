import { useSnackbar } from 'notistack';
import queryString from 'query-string';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import productApi from '../../../api/productApi';
import '../../pages/productList/productList.css';
import TableProduct from './TableProduct';

function ProductList() {
  const { enqueueSnackbar } = useSnackbar();
  const [productList, setProductList] = useState([]);
  let type = typeof productList;
  console.log('type', type);
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);

    return {
      ...params,
      _limit: Number.parseInt(params._limit) || 263,
    };
  }, [location.search]);
  useEffect(() => {
    (async () => {
      try {
        const params2 = { ...queryParams };
        const rp = await productApi.getAll(params2);
        const { data } = rp;
        setProductList(data);
      } catch (error) {
        console.log('failed');
      }
    })();
  }, [queryParams]);

  const handleDelteProduct = (id) => {
    (async () => {
      try {
        const list = await productApi.remove(id);
        let res = productList.filter((product) => product.id !== list.id);

        setProductList(res);
        enqueueSnackbar('Bạn đã xóa sản phẩm', { variant: 'success' });
      } catch (error) {
        enqueueSnackbar(error.message, { variant: 'error' });
      }
    })();
  };
  return (
    <div style={{ height: 600, width: '100%' }}>
      {productList.length > 0 && <TableProduct data={productList} onDelete={handleDelteProduct} />}
    </div>
  );
}
export default ProductList;
