import axiosClient from "./axiosClient";

const brandsApi = {
    getAll(params){
        const url = '/product/brands';
        return axiosClient.get(url, {params: params});
    }, 
    get(id){
        const url = `/product/brands/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/product/brands';
        return axiosClient.post(url, data);
    }, 
    update(data){
        const url = `/product/brands/${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/product/brands/${id}`;
        return axiosClient.delete(url);
    },
};

export default brandsApi;