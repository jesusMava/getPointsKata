let arr = []
let pos = 0
let acc = arr[0]
let resul = []

const getPoints = (resul, acc, pos, arr) => {
  if(arr.length == 0) return []
   if(pos < arr.length - 1) {
     return (arr[pos + 1][0] <= acc[1]) ?
       (
         acc = (acc[1] < arr[pos + 1][1]) ? 
         [acc[0], arr[pos + 1][1]] : acc,
         getPoints(resul, acc, pos + 1, arr)
       ) :
       getPoints([...resul, acc], acc = arr[pos + 1], pos + 1, arr)
   }
   return [...resul, acc]
 }

console.log(getPoints(resul, acc, pos, arr))

export default getPoints
