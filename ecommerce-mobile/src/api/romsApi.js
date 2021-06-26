import axiosClient from "./axiosClient";

const romsApi = {
    getAll(params){
        const url = '/product/roms';
        return axiosClient.get(url, {params: params});
    }, 
    get(id){
        const url = `/api/rom/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/api/rom';
        return axiosClient.post(url, data);
    }, 
    update(data){
        const url = `/api/rom/${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/api/rom/${id}`;
        return axiosClient.delete(url);
    },
};

export default romsApi;