import {fetchData } from './promise'


test("测试异步函数",()=>{
    fetchData((data)=>{
        expect(data).toRqual({
            success:true
        })
    })
})