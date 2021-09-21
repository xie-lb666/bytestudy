const User = require('./user');
// 三部曲
// 输入和输出
/**
 * return value
 * 
 * 
 */



test('should getName', () => {
    // 准备测试数据  --》given
    const a = 1;
    const b = 1;
    // 触发测试动作
    const r = add(a, b);
    // 验证   then
    expect(r).toBe(2);
})