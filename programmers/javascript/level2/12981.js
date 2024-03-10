// https://school.programmers.co.kr/learn/courses/30/lessons/12981
// 가장 먼저 탈락하는 사람의 번호와 차례 구하기
function solution(n, words) {
    let stack = []
    words.reduce((acc, cur, idx) => {
        // case1 - 앞전 끝 글자와 현재 앞글자가 일치하지 않는 경우
        if (acc.slice(-1) !== cur.slice(0,1) && idx !== 0) {
            stack.push(idx)
        }
        return cur
    }, '')

    // case2 - 중복되는 단어를 말한 경우
    const duplicate = words.findIndex((val, idx) => idx !== words.indexOf(val))
    if (duplicate !== -1) {
        stack = [...stack, duplicate ]
    }

    if (stack.length > 0) {
        const min = Math.min(...stack)
        const peopleNum = (min % n) + 1
        const num = Math.ceil((min + 1) / n)
        return [peopleNum, num]
    } else {
        return [0,0]
    }
}
console.log(solution(3, 	["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))
console.log(solution(5, 	["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))
console.log(solution(2, 	["hello", "one", "even", "never", "now", "world", "draw"]))