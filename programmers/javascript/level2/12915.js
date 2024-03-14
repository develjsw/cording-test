// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
    return strings.map((el) => {
        return el[n] + el
    }).sort().map((subEl) => subEl.slice(1))
}
console.log(solution(["sun", "bed", "car"], 1))