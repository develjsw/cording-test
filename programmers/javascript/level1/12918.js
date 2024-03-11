// https://school.programmers.co.kr/learn/courses/30/lessons/12918
function solution(s) {
    return s.split('').every((el, idx) => !isNaN(Number(el)) && ([4, 6].includes(s.length)))
}
console.log(solution("a234"))
console.log(solution("1234"))