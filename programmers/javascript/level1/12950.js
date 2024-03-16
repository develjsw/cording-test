// https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
    return arr1.map((el, idx) =>
        el.map((subEl, subIdx) => arr1[idx][subIdx] + arr2[idx][subIdx])
    )
}
console.log(solution([[1,2],[2,3]], [[3,4],[5,6]]))