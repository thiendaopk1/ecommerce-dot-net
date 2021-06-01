import axiosClient from './axiosClient';

const commentsApi = {
    addComment(data){
        const url = '/api/comment/new';
        return axiosClient.post(url, data);
    }, 
    // update(data){
    //     const url = `/api/comment/all?productID=${data.id}`;
    //     return axiosClient.patch(url, data);
    // }, 
    // remove(id){
    //     const url = `/api/comment/all?productID=${id}`;
    //     return axiosClient.delete(url);
    // },

};
export default commentsApi;