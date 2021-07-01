import axiosClient from "./axiosClient";

const brandsApi = {
    getAll(params){
        const url = '/product/brands';
        return axiosClient.get(url, {params: params});
    }, 
 
    add(data){
        const url = '/api/brand';
        return axiosClient.post(url, data);
    }, 
    edit(data){
        const url = `/api/brand/${data.id}`;
        return axiosClient.put(url, data);
    }, 
    remove(id){
        const url = `/api/brand/${id}`;
        return axiosClient.delete(url);
    },
    get(id){
        const url = `/api/brand/${id}`;
        return axiosClient.get(url);
    },
};

export default brandsApi;