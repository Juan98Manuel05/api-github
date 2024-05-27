function f(x, y, z) {
    let a = x + y;
    let b = a * z;
    let c = Math.sin(b);
    return c;
}

// suggestion:
function getSenOfNumber(x, y, z) {
    let resultAdd = x + y;
    let resultMlt = resultAdd * z;
    let senNumber = Math.sin(resultMlt);
    return senNumber;
}