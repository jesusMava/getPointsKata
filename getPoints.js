let arr = []
let pos = 0
let acc = arr[0]

const getPoints = (acc, pos, arr) => {
  if(arr.length == 0) return []

  if(pos < arr.length - 1) {
    if(arr[pos + 1][0] <= acc[1]) {
      if(acc[1] < arr[pos + 1][1]) {
        acc = [acc[0], arr[pos + 1][1]]
      }
      return getPoints(acc, pos + 1, arr)
    }
  }
  return [acc, arr[pos + 1]]
}

console.log(getPoints(acc, pos, arr))
module.exports = getPoints
