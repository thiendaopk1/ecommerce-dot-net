import axiosClient from './axiosClient';


const ordersApi = {
    
    getAll(params){
        const url ='/users/orders-manage';
        return axiosClient.get(url, {params: params});
    }, 
    add(data){
        const url = '/api/order';
        return axiosClient.post(url, data);
    }, 
    cancel(id){
        const url = `/users/orders-manage/deny/${id}`;
        return axiosClient.put(url);
    },
    remove(id){
        const url = `/api/order${id}`;
        return axiosClient.delete(url);
    },
};
export default ordersApi;