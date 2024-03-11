// https://school.programmers.co.kr/learn/courses/30/lessons/12948
function solution(phone_number) {
    let lengthOfTel = phone_number.length
    let targetLength = lengthOfTel-4

    return phone_number.replaceAll(
        phone_number.substring(0, targetLength), "*".repeat(targetLength)
    )
}
console.log(solution("01033334444"))
console.log(solution("027778888"))