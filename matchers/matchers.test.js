//匹配器

// test('测试对象属性',()=>{
//     const a = { one:1}
//     expect(a).tobe({one:1})
// })

test('测试对象属性',()=>{
    const a = { one:1}
    expect(a).toEqual({one:1})
})