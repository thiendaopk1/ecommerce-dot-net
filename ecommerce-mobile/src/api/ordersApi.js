import axiosClient from './axiosClient';


const ordersApi = {
    
    getAll(params){
        const url ='/users/orders';
        return axiosClient.get(url, {params: params});
    },
    getAllAdmin(params) {
        const url ='api/admin/orders-version2';
        return axiosClient.get(url, {params: params});
    },
    add(data){
        const url = '/api/order';
        return axiosClient.post(url, data);
    },
    addCod(data){
        const url = '/api/order/cod';
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
    get(id){
        const url = `/users/orders-manage/status/${id}`;
        return axiosClient.get(url);
    }

};
export default ordersApi;