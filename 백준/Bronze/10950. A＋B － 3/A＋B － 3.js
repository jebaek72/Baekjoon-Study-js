const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = Number(input[0]);

for(let i = 1; i <= num; i++){
    let score = input[i].split(' ');
    console.log(Number(score[0]) + Number(score[1]));
}