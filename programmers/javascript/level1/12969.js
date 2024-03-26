// https://school.programmers.co.kr/learn/courses/30/lessons/12969
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const numArr = data.split(" ")
    for (let i=0; i<numArr[1]; i++) {
        let starts = ''
        for (let k=0; k<numArr[0]; k++) {
            starts += '*'
        }
        console.log(starts)
    }
})