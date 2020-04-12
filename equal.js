let a = 1;
let b = 1;
let c = [1];
let d = [1];

console.log(a == b);
console.log(c == d); //false 存储复杂数据类型（引用数据类型）的时候，存储的地址不一样，C ,d 指向不同的地址，导致 ==， ===都不相等