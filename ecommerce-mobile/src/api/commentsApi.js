import axiosClient from './axiosClient';

const commentsApi = {
  addComment(data) {
    const url = '/api/comment/new';
    return axiosClient.post(url, data);
  },
  get(id) {
    const url = '/api/comment/all?productID=' + id;
    return axiosClient.get(url);
  },
  getAllComment(id) {
    const url = '/api/comment/all?productID=' + id;
    return axiosClient.get(url);
  },
  getAll(param) {
    const url = '/api/admin/comments';
    return axiosClient.get(url);
  },
  update(id) {
    const url = '/api/admin/comments/' + id;
    return axiosClient.put(url);
  },
};
export default commentsApi;
