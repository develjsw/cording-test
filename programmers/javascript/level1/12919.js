// https://school.programmers.co.kr/learn/courses/30/lessons/12919
function solution(seoul) {
    const findIndex = seoul.findIndex((el) => el === "Kim");
    return `김서방은 ${findIndex}에 있다`;
}
console.log(solution(["Jane", "Kim"]));