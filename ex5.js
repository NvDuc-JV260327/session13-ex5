let a = [];
for(let i = 0; i < 20; i++) {
    a[i] = Math.round(Math.random() * 100);
}
let even = 0;
let odd = 0;
for(let value of a) {
    if(value % 2 === 0) {
        even += value;
    } else {
        odd += value;
    }
}
console.log(a);
console.log(even);
console.log(odd);