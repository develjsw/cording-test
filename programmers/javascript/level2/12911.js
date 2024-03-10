// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// - 2진수 변환 부분만 찾아 보고 진행 하였음.
function solution(n) {
    const ezinsu = n.toString(2)
    const ezinsuLength = ezinsu.split('').filter((el) => el === '1').length

    let cnt = n + 1
    while(true) {
        if (ezinsuLength === cnt.toString(2).split('').filter((el) => el === '1').length) {
            return cnt
        }
        cnt++
    }
}
console.log(solution(78))