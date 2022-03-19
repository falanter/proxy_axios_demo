import myaxios from '@/utils/myaxios'
export default function post(username,password){
    return myaxios({
        url:'/api/post',
        method:'post',
        data:{
            username,
            password
        }
    })
}