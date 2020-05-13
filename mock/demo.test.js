jest.mock('./demo')
import { fetchData } from './demo'
import Axios from 'axios'

// jest.mock('axios')
// test('测试Mock接口',()=>{
//     Axios.get.mockResolvedValue({
//         data:"(function(){return '123'})()"
//     })
//     return fetchData().then(data=>{
//         expect(eval(data)).toEqual("123")
//     })
// })


//会去__mock__找到demo文件
test('测试Mock接口', () => {
    return fetchData().then(data => {
        expect(eval(data)).toEqual("123")
    })
})