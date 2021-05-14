import axiosClient from "./axiosClient";


const userApi={
    register(data){
        // path den api dang ky
        const url = '/auth/local/register';
        return axiosClient.post(url,data);
    },

    login(data){
        // path den api dang nhap
        const url = 'api/login/user';
        return axiosClient.post(url,data);
    },
};

export default userApi;