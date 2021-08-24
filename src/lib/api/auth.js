import request from '../axios/axios';
export default {
    getToken(id, password){
        return request.post("/admin/login",{
            id : id,
            password : password
        })
    }
}