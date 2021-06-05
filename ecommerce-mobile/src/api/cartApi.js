import axiosClient from './axiosClient';

const cartApi = {
    getAll(params){
        const url = '/api/cart';
        return axiosClient.get(url, {params: params});
    }, 
    add(data){
        const url = '/api/cart';
        return axiosClient.post(url, data);
    }, 
    remove(id){
        const url = `/api/cart/${id}`;
        return axiosClient.delete(url);
    },
};
export default cartApi;