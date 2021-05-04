import axiosClient from "./axiosClient";

const ramsApi = {
    getAll(params){
        const url = '/product/rams';
        return axiosClient.get(url, {params: params});
    }, 
    get(id){
        const url = `/product/rams/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/product/rams';
        return axiosClient.post(url, data);
    }, 
    update(data){
        const url = `/product/rams/${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/product/rams/${id}`;
        return axiosClient.delete(url);
    },
};

export default ramsApi;