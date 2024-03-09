// https://school.programmers.co.kr/learn/courses/30/lessons/12954
function solution(x, n) {
    const store = []
    // x부터 시작해 x씩 증가, n개 만큼 배열에 저장
    for (let i=0; i<n; i++) {
        (i === 0)
            ? store.push(x)
            : store.push(Number(...store.slice(-1)) + x)
    }
    return store
}
console.log(solution(2, 5))