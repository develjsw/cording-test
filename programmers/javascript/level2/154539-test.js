// https://school.programmers.co.kr/learn/courses/30/lessons/154539
function solution(numbers) {
    let bigNumbers = [];

    numbers.forEach((el, idx) => {

        let found = false;
        for (let subIdx = idx + 1; subIdx < numbers.length; subIdx++) {
            const subEl = numbers[subIdx];
            if (Number(numbers[idx]) < Number(subEl)) {
                bigNumbers.push(subEl);
                found = true;
                break;
            }
        }

        if (!found) {
            bigNumbers.push(-1);
        }
    });

    return bigNumbers;
}
console.log(solution([9, 1, 5, 3, 6, 2]))