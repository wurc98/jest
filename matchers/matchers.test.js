//匹配器


//通用匹配器
test('测试对象属性',()=>{
    const a = 1
    expect(a).toBe(1)
})


//toEqual 递归检查对象或者数组的每个字段
test('测试对象属性',()=>{
    const a = { one:1}
    expect(a).toEqual({one:1})
})
//toMatchObject 检查对象中是否有某个字段




// 真假值匹配器
/*
    toBeNull 只匹配Null
    toBeUndefined 只匹配Undefined
    toBeDefined 与toBeUndefined相反
    roBeTruthy 匹配真值
    roBeFalsy 匹配假值
**/
//not 匹配器
// test('not 匹配器',()=>{
//     const a = 1;
//     expect(a).not.toBeFalsy()
// })


//匹配数字判断
/**
 * toBeGreaterThan 大于
 * toBeLessThan  小于
 * toBeGreaterThanOrEqual 大于等于
 * toBeLessThanOrEqual 小于等于
 * 
 * 浮点数计算
 * toBeCloseTo 
 */
// test('浮点数计算 匹配器',()=>{
//     const a = 0.1;
//     const b = 0.2;
//     expect(a+b).toBeCloseTo(0.3)
// })


//字符串相关 
//toMatch  字符串是否包含子字符串
// test('toMatch测试',()=>{
//     const url ='https://github.com/wurc98/jest'
//     expect(url).toMatch('wurc98')
// })

//数组相关 Array和Set
//toContain 是否包含某个属性
//注意，区分数字和字符串类型
// test('toContain测试',()=>{
//     const array =[1,2,3,1]
//     expect(array).toContain(1) 

//     const set = new Set(array)
//     expect(set).toContain(1) 
// })


//抛出异常
//toThrow  
// const throwNewError = ()=>{
//     throw new Error('this is a errow')
// }
// test('toThrow测试',()=>{
//     expect(throwNewError).not.toThrow("this is a errow")
// })