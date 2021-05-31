import axiosClient from './axiosClient';

const commentsApi = {
    getAll(params){
        const url = '/api/comment/all?productID=';
        return axiosClient.get(url, {paramms: params});
    },
    get(id){
        const url = `/api/comment/all?productID=${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/api/comment/all?productID=';
        return axiosClient.post(url, data);
    }, 
    update(data){
        const url = `/api/comment/all?productID=${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/api/comment/all?productID=${id}`;
        return axiosClient.delete(url);
    },

};
export default commentsApi;