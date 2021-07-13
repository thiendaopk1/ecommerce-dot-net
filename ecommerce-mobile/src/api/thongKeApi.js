import axiosClient from "./axiosClient";

const thongKeApi = {
   getAll(params){
    const url = '/api/admin/thong-ke';
    return axiosClient.get(url, {params: params});
   }
}
export default thongKeApi;