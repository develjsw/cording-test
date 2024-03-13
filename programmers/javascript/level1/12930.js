// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// TODO : 코드실행 - 정상, 제출 후 채점 - 실패
function solution(s) {
    return s.split(' ').filter((el) => el.trim() !== '').map((el, idx) => {
        return el.split('').map((subEl, subIdx) => {
            return (subIdx % 2 === 0) ? subEl.toUpperCase() : subEl
        }).join('')
    }).join(' ')
}
console.log(solution("try hello world"))
console.log(solution("try   hello  world yo"))