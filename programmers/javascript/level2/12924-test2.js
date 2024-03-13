// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 연속하는 자연수로 분해하기

function solution(end, start = 1) {
    let complete = 0

    for (let i=start; i<=end; i++) {

        let middleSum = 0
        //console.log(`i(${i})`)

        for (let k=i; k<=end; k++) {
            middleSum += k

            // 조건 일치
            if (middleSum === end) {
                complete++
                break
            }
            //console.log(middleSum)
            //console.log(`k(${k})`)
        }
    }
    return complete
}
console.log(solution(15))
