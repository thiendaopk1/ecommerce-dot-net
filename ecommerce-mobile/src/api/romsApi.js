import axiosClient from "./axiosClient";

const romsApi = {
    getAll(params){
        const url = '/product/roms';
        return axiosClient.get(url, {params: params});
    }, 
    get(id){
        const url = `/product/roms/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/product/roms';
        return axiosClient.post(url, data);
    }, 
    update(data){
        const url = `/product/roms/${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/product/roms/${id}`;
        return axiosClient.delete(url);
    },
};

export default romsApi;