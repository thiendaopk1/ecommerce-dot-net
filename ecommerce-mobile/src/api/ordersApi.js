import { useSelector } from 'react-redux';
import axiosClient from './axiosClient';


const ordersApi = {
    
    getAll(params){
        const url = '/users/orders-manage';
        return axiosClient.get(url, {userID: params});
    }, 
    add(data){
        const url = '/api/order';
        return axiosClient.post(url, data);
   
    }, 
    remove(id){
        const url = `/api/order${id}`;
        return axiosClient.delete(url);
    },
};
export default ordersApi;