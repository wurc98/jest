import {
  generateConfig,
  generateAnthorConfig,
  generateDateConfig
} from "./demo";

// test("测试generaterConfig函数",()=>{
//     expect(generateConfig()).toEqual(
//         {
//             url:"http://localhost",
//             port :8080
//         }
//     )
// })
//快照
//第一次运行是，会将generateConfig的执行结果保存到_snapshots_文件中，

//第二次运行会比照快照。  如果发生变动，会报错，但快照不会更新。
// 如果需要改动快照需要 在命令行 改变快照  w - u 
//多个函数，形成多个快照。需要改动时需要在命令行输入 w - i - u -u -u 依次改动  不改按s跳过

// test("测试generaterConfig函数",()=>{
//     expect(generateConfig()).toMatchSnapshot();
// })
// test("测试generateAnthorConfig函数",()=>{
//     expect(generateAnthorConfig()).toMatchSnapshot();
// })

//如果函数内，有一直在变化的数值 比如 new Date()
// test("测试generateDateConfig函数",()=>{
//     expect(generateDateConfig()).toMatchSnapshot({
//         date:expect.any(Date)
//     });
// })

//使用prettier
//行内快照   会把快照放在测试用例的toMatchInlineSnapshot的第二个参数
test("测试generateDateConfig函数", () => {
  expect(generateDateConfig()).toMatchInlineSnapshot(
    {
      date: expect.any(Date)
    },
    `
    Object {
      "data": Object {
        "uid": 1,
      },
      "date": Any<Date>,
      "port": 8083,
      "url": "http://localhost",
    }
  `
  );
});
