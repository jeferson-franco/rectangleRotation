const solution = require('./rectangleRotation.js');

test('test 1', () => {
    expect(solution(6, 4)).toBe(23);
});

test('test 2', () => {
    expect(solution(30, 2)).toBe(65);
});

test('test 3', () => {
    expect(solution(8, 6)).toBe(49);
});

test('test 4', () => {
    expect(solution(16, 20)).toBe(333);
});

test('test 5', () => {
    expect(solution(20, 32)).toBe(653);
});

test('test 6', () => {
    expect(solution(30, 26)).toBe(795);
});

test('test 7', () => {
    expect(solution(50, 4)).toBe(177);
});

test('test 8', () => {
    expect(solution(2, 2)).toBe(5);
});

test('test 9', () => {
    expect(solution(50, 50)).toBe(2521);
});

test('test 10', () => {
    expect(solution(38, 42)).toBe(1563);
});
