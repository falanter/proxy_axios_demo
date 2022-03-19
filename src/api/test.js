import myaxios from '@/utils/myaxios.js'
// myaxios.get('data.json').then(resp=>{
//   console.log(resp.data)
// }).catch(err=>{
//   console.log("请求失败")
// })
//改进=>
// myaxios({
//     method:'get',
//     url:'data.json'
// }).then(resp=>{
//     console.log(resp.data)
// })
//改进=>
// const BASE_URL='/dev-apis'
export default{
    getList(){
        const promise1=myaxios({
            method:'get',
            url:'data.json'
        })
        return promise1
    }
}
