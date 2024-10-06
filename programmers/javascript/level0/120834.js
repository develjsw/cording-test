// https://school.programmers.co.kr/learn/courses/30/lessons/120834
function solution(age) {
    return Array.from(age.toString()).map((item) => 'abcdefghijklmnopqrstuvwxyz'[item]).join('');
}
console.log(30)