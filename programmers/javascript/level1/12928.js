// https://school.programmers.co.kr/learn/courses/30/lessons/12928
function solution(n) {
    // 약수의 합
    let store = 0
    for (let i=1; i<n+1; i++) {
        if (n % i === 0) {
            store += i
        }
    }
    return store
    //return Array.from({ length: n }, (v, i) => i + 1).reduce((acc, cur) => (n % cur === 0) ? acc + cur : acc, 0)
}
console.log(solution(12))