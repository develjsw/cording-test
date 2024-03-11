// https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
    const min = Math.min(...arr)
    const sum = String(arr).split('').reduce((acc, cur) => acc + parseInt(cur), 0)
    return (sum === 1)
        ? [-1]
        : arr.filter((el) => el !== min)
}
console.log(solution(10))