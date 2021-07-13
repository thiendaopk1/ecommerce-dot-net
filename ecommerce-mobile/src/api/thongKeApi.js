import axiosClient from "./axiosClient";

const thongKeApi = {
   getAll(params){
    const url = '/api/admin/thong-ke';
    return axiosClient.get(url, {params: params});
   },
   getDoanhThuNam(){
      const url = '/api/revenue/year';
      return axiosClient.get(url);
   },
   getDoanhThuThang(){
      const url = '/api/revenue/month';
      return axiosClient.get(url);
   },

}
export default thongKeApi;