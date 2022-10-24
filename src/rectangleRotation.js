function solution(a, b) {
    let ld = a / Math.sqrt(2) / 2;
    let sd = b / Math.sqrt(2) / 2;
    let rectExt = [2 * Math.floor(ld) + 1, 2 * Math.floor(sd) + 1];
    let rectInt = [2 * Math.floor(ld) + (ld % 1 < 0.5 ? 0 : 2), 2 * Math.floor(sd) + (sd % 1 < 0.5 ? 0 : 2)];
    return rectExt[0] * rectExt[1] + rectInt[0] * rectInt[1];
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test rectangleRotation

// alternative solution
