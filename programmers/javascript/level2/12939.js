// https://school.programmers.co.kr/learn/courses/30/lessons/12939
function solution(s) {
    const sp = s.split(' ')
    const sort = sp.sort((a, b) => a - b)

    const a = sort.slice(0, 1)
    const b = sort.slice(sort.length -1)

    return [ ...a, ...b ].join(' ')
}
console.log(solution("1 2 3 4"))
console.log(solution("-1 -2 -3 -4"))