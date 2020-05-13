import {fetchData,fetchData2 } from './promise'


// test("测试异步函数",(done)=>{
//     fetchData((data)=>{
//         expect(data).toEqual({
//             success:true
//         })
//         done()
//     })
// })

// test("测试异步函数",()=>{
//     return fetchData2().then(res=>{
//         expect(res.data).toEqual({success:true})
//     })
// })


// test("测试异步函数",()=>{
//     expect.assertions(1)  //必须要执行一次expect
//     return fetchData2().catch(e=>{
//         expect(e.toString()).toMatch('404')
//     })
// })


test("测试异步函数",()=>{
    return expect(fetchData2()).resolves.toMatchObject({data:{success:true}})
})


test("测试异步函数",()=>{
    return expect(fetchData2()).rejects.toThrow()
})