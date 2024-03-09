// https://school.programmers.co.kr/learn/courses/30/lessons/87389
function solution(n) {
    let min
    for (let i=1; i<n+1; i++) {
        if (n % i === 1) {
            min = i
            break
        }
    }
    return min
}
console.log(solution(10))