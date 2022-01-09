module.exports = function reverse (n) {
    console.log(n);
    n = Math.abs(n);
    let tempN = (n < 100) ? '0' + n.toString() : n.toString();
    let output = '';
    for (let i = 2; i >= 0; i--) {
      output += tempN[i]; 
    }
    return output;
}
