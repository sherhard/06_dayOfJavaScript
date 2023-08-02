
for (let i = 0; i <= 10; i++) {
    console.log(i);
};
let j = 0;
while (j <= 10) {
    console.log(j);
    j++;
}
let k = 0;
do {
    console.log(k);
    k++;
} while (k <= 10);
console.log('-----------------------------');
for (let o = 10; o >= 0; o--) {
    console.log(o)
}
let l = 10;
while (l >= 0) {
    console.log(l);
    l--;
}
let r = 10;
do {
    console.log(r);
    r--;
} while (r >= 0);
console.log('--------------------------------');
let str = '';
for (let h = 0; h <= 10; h++) {
    str = str + 'x'
    console.log(str)
}
console.log('--------------------------------');


for (let chet = 0; chet <= 100; chet++) {
    if (chet % 2 == 0) {
        console.log(chet)
    }

}

for (let minchet = 0; minchet <= 100; minchet++) {
    if (minchet % 2 == 1) {
        console.log(minchet)
    }
}
let sum = 0;
for (let sums = 0; sums <= 100; sums++) {
    sum = sum + sums;

} console.log(sum)


console.log('--------------------------------');
let finechet = 0;
for (let s = 0; s <= 100; s++) {
    if (s % 2 == 0) {
        finechet = finechet + s;
    }

}
console.log(finechet);
