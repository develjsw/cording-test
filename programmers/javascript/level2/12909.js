// https://school.programmers.co.kr/learn/courses/30/lessons/12909
function solution(s){
    const stack = [];

    for (let i = 0; i<s.length; i++) {
        const bracket = s.charAt(i);

        if (bracket === '(') {
            stack.push(bracket);
        } else {
            if (stack.length === 0) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length > 0 ? false : true
}
console.log(solution(")()("))