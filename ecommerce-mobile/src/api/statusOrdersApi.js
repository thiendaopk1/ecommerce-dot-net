import axiosClient from "./axiosClient";

const statusOrdersApi = {
    getAll(params){
        const url = '/api/order/status';
        return axiosClient.get(url, {params: params});
    }, 
}
export default statusOrdersApi;