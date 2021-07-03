import axiosClient from "./axiosClient";

const productApi = {

    getAll(params){
        const url = `/products`;
        console.log("thien", params);
        return axiosClient.get(url, {params});
    },
    getAll2(params){
        const url = `/products?${params}`;
        console.log("thien", params);
        return axiosClient.get(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    add(data){
        const url = '/product';
        return axiosClient.post(url, data);
    }, 
    edit(data){
        const url = `/product/${data.id}`;
        return axiosClient.put(url, data);
    },
    update(data){
        const url = `/product/${data.id}`;
        return axiosClient.patch(url, data);
    }, 
    remove(id){
        const url = `/product/${id}`;
        return axiosClient.delete(url);
    },

    uploadImgs(data,id){
        const url = `/api/upload/many/${id}`;
        return axiosClient.post(url, data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
    },
    uploadImg(data,id){
        const url = `/api/upload/one/${id}`;
        return axiosClient.post(url, data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
    }
};

export default productApi;