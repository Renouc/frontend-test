// 首先我们调用的是 expect 方法，这个方法被称之为断言方法，
// 调用该方法之后会得到一个名为 expectation 的对象，
// 在这个对象上面就可以使用“修饰符”以及“匹配器”。

// 目前 Jest 里面支持的修饰符有 3 个：
// .not
// .resolves
// .rejects
describe("修饰符", () => {
  it("toBe", () => {
    expect(1 + 2).toBe(3);
  });

  it("not", () => {
    expect(1 + 2).not.toBe(5);
  });
});

// 常用的匹配器

describe("匹配器", () => {
  // toBe
  // toEqual
  it("常用匹配器", () => {
    const stu = { name: "张三", score: { html: 100, css: 90 } };
    const stu2 = { name: "张三", score: { html: 100, css: 90 } };

    expect(stu).not.toBe(stu2);
    // 使用 toEqual 来进行深度比较
    // toEqual 会递归比较对象的所有属性
    expect(stu).toEqual({ name: "张三", score: { html: 100, css: 90 } });
  });

  it("布尔值相关匹配器", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();

    const a = 0;
    expect(a).toBeFalsy();
    expect(a).not.toBeTruthy();
  });

  it("无参数匹配器", () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    const a = 0;
    expect(a).not.toBeNull();
    expect(a).toBeDefined();
    expect(a).not.toBeUndefined();

    let b = undefined;
    expect(b).toBeUndefined();
  });
});
