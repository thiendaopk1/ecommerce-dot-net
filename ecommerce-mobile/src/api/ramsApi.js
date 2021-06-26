import axiosClient from "./axiosClient";

const ramsApi = {
    getAll(params){
        const url = '/product/rams';
        return axiosClient.get(url, {params: params});
    }, 
    get(id){
        const url = `/api/ram/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/api/ram';
        return axiosClient.post(url, data);
    }, 
    update(data){
        const url = `/api/ram/${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/api/ram/${id}`;
        return axiosClient.delete(url);
    },
};

export default ramsApi;