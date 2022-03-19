import myaxios from '@/utils/myaxios'
export default function get(){
    return myaxios({
        url:'/api/get',
        method:'get',
    })
}