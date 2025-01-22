const { sum, sub, mul, div } = require("./util");

// Jest 中提供了一些全局方法或者对象，这些方法或者对象是无需引用的，可以在测试文件直接使用。
// 通过 test 或者 it 方法来创建一个测试用例，it 方法实际上是 test 方法的别名方法。
// 通过 describe 方法可以对多个测试用例进行分组。

describe("测试加减法", () => {
  test("测试加法", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("测试减法", () => {
    expect(sub(5, 1)).toBe(4);
  });
});

describe("测试乘除法", () => {
  it("测试乘法", () => {
    expect(mul(2, 3)).toBe(6);
  });

  it("测试除法", () => {
    expect(div(9, 3)).toBe(3);
  });
});
