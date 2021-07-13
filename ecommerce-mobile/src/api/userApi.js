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
    updateUser(data){
        // path den api update user
        const url = 'users/edit/'+data.id;
        return axiosClient.put(url,data);
    },
    forgotPassword(data){
        // path den api  quen mat khau
        const url = 'users/forgot-pass';
        return axiosClient.post(url,data);
    },
    changePassword(data){
        // path den api doi mat khau
        const url = 'users/reset-pass';
        return axiosClient.post(url,data);
    },
    doiMatKhau(data){
        // path den api doi mat khau
        const url = 'users/update-pass';
        return axiosClient.post(url,data);
    },
    getAll(params){
        const url = 'api/admin/users'
        return axiosClient.get(url,{params: params});
    },
    blockUser(id){
        const url = 'api/admin/users/blocked/'+id;
        return axiosClient.put(url,{userID:id});
    },
    newUser(data){
        const url = 'api/admin/users/new';
        return axiosClient.post(url,data);
    },
    changeRole(value){
        const url = 'api/admin/users/role/'+value.id+'/'+value.role;
        return axiosClient.put(url,{role:value.role});
    },
};

export default userApi;