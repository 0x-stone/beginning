const testStr = '[(a(b)c)'  // true

// [ ( a ( b ) 
// ( a ( b 
// ( a c
//  

function solution (str) {
  let status = false
  const strArray = Array.from(str)
  const collect = []
  strArray.forEach(item => {
    if (iemt === '(') {
      collect.push('(')
    }
    if (item === ')') {
      if (collect.length === 0) {
        status = false
      }
      collect.pop()
    }
  })
  if (collect.length === 0) {
    status = true
  }
  return status
}

solution(testStr)
