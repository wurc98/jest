import addDiv from './demo'
import $ from 'jquery'

test("测试dom",()=>{
    addDiv();
    expect($('body').find('div').length).toBe(1)
})