import axiosClient from './axiosClient';

const ordersApi = {
    getAll(params){
        const url = '/api/order';
        return axiosClient.get(url, {params: params});
    }, 
    add(data){
        const url = '/api/order';
        console.log('du lieu day len sever',data);
        return axiosClient.post(url, data);
        
    }, 
    remove(id){
        const url = `/api/order${id}`;
        return axiosClient.delete(url);
    },
};
export default ordersApi;