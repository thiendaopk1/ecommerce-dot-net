import axiosClient from "./axiosClient";

const brandsApi = {
    getAll(params){
        const url = '/product/brands';
        return axiosClient.get(url, {params: params});
    }, 
 
    add(data){
        const url = '/product/brand';
        return axiosClient.post(url, data);
    }, 
    edit(data){
        const url = `/product/brand/${data.id}`;
        return axiosClient.put(url, data);
    }, 
    remove(id){
        const url = `/product/brand/${id}`;
        return axiosClient.delete(url);
    },
};

export default brandsApi;