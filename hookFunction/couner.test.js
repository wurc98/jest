import Counter from './counter'



let counter =null

//当两个测试同一个属性时，会相互影响，所以需要引用钩子函数
beforeAll(()=>{  //测试之前运行
    console.log("beforeAll")
})
afterAll(()=>{  //测试之前运行
    console.log("afterAll")
})
beforeEach(()=>{  //每个测试运行之前都会运行
    console.log("beforeEach")
    counter = new Counter();
})
afterEach(()=>{  //每个测试运行之前都会运行
    console.log("afterEach")
})
test('测试Counter中的addOne方法',()=>{
    console.log("测试Counter中的addOne方法")
    counter.addOne();
    expect(counter.number).toBe(1)
})

test('测试Counter中的reduceOne方法',()=>{
    console.log("测试Counter中的reduceOne方法")
    counter.reduceOne();
    expect(counter.number).toBe(-1)
})

// console.log hookFunction/couner.test.js:9
// beforeAll
// console.log hookFunction/couner.test.js:15
// beforeEach
// console.log hookFunction/couner.test.js:22
// 测试Counter中的addOne方法
// console.log hookFunction/couner.test.js:19
// afterEach
// console.log hookFunction/couner.test.js:15
// beforeEach
// console.log hookFunction/couner.test.js:28
// 测试Counter中的reduceOne方法
// console.log hookFunction/couner.test.js:19
// afterEach
// console.log hookFunction/couner.test.js:12
// afterAll
