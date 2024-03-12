// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 연속하는 자연수로 분해하기

let complete = 0
function solution(end, start = 1) {
    let sum = 0
    //let complete = 0
    for (let i=start; i<=end; i++) {
        sum += i
        // 조건 일치
        if (sum === end) {
            complete++
        }
        // 중지 조건
        if (sum > end) {
            // solution(end, start + 1)
            // return
            return solution(end, start + 1)
        }
        console.log(`sum : (${sum})`)
        console.log(`complete : (${complete})`)
    }
    return complete
}
console.log(solution(15))