import axiosClient from './axiosClient';

const productApi = {
  getAll(params) {
    const url = `/products`;
    return axiosClient.get(url, { params });
  },
  getAll2(params) {
    const url = `/products?${params}`;
    return axiosClient.get(url);
  },
  get(id) {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  history(data) {
    const url = `api/search/history`;
    return axiosClient.get(url, data);
  },
  add(data) {
    const url = '/product/v3';
    return axiosClient.post(url, data);
  },
  edit(data) {
    const url = `/product/${data.id}`;
    return axiosClient.put(url, data);
  },
  update(data) {
    const url = `/product/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/product/${id}`;
    return axiosClient.delete(url);
  },
  getAllInfo(productId) {
    const url = `/api/information/${productId}`;
    return axiosClient.get(url);
  },

  getInfo(productId, infomationId) {
    const url = `/api/information/${productId}/${infomationId}`;
    return axiosClient.get(url);
  },

  editInfo(data) {
    const url = `/api/information/${data.productId}/${data.infomationId}`;
    return axiosClient.put(url, data);
  },

  removeInfo(productId, infomationId) {
    const url = `/api/information/${productId}/${infomationId}`;
    return axiosClient.delete(url);
  },

  uploadImgs(data, id) {
    const url = `/api/upload/many/${id}`;
    return axiosClient.post(url, data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    });
  },
  addInfo(data, id) {
    const url = `/api/information/${id}`;
    return axiosClient.post(url, data);
  },

  getImg(id) {
    const url = `/api/image/${id}`;
    return axiosClient.get(url);
  },

  removeImg(id, idi) {
    const url = `/api/image/one/${id}/${idi}`;
    return axiosClient.delete(url);
  },
};

export default productApi;
