import axiosClient from './axiosClient';


const ordersApi = {
    
    getAll(params){
        const url =`users/orders-manage?userID=${params}`;
        return axiosClient.get(url);
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