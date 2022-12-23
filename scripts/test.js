
[[1, 2, 3]
[8, 9, 4]
[7, 6, 5]]



// 'left-top'
// 'right-top'
// 'right-bottom'
// 'left-right'


function solution (array) {
  const withLength = array[0].length
  const heightLength = array.length

  const length = withLength * heightLength

  // right, 
  // down
  // left
  // up

  let action

  for (let i = 0;i <= length;i += 1) {

    const x = i % withLength
    const y = Math.round(i / heightLength)

    array[x][y]


  }


}

solution(fills,)

