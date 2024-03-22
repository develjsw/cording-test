// https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
    return commands.map((el, idx) => array.slice([...el][0]-1, [...el][1]).sort()[[...el][2]-1])
}
console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]))