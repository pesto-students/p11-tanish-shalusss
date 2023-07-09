function gcd(a, b) {
    if (a == 0)
        return b;
    return lcm((gcd(b % a, a)), a, b);
}

function lcm(gcd, a, b) {
    
    let product = 0;
    product = a*b;
    return product;
}

console.log(gcd(6, 8));   // Test Case 1
console.log(gcd(15, 25)); // Test Case 2
