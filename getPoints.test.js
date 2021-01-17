const getPoints = require('./getPoints')
let pos = 0
let arr = [] 
let acc = []

test('get [[1,3],[2,4],[5,6]] equal [[1,4], [5, 6]]', () => {
  pos = 0
  arr = [[1,3],[2,4],[5,6]] 
  acc = arr[0]
  expect(getPoints(acc, pos, arr)).toEqual([[ 1, 4 ], [ 5, 6 ]])
})

test('get [[-2, 2], [2,4], [4,7], [9,10]] equal [[-2,7], [9,10]]', () => {
  pos = 0
  arr = [[-2, 2], [2,4], [4,7], [9,10]]
  acc = arr[0]
  expect(getPoints(acc, pos, arr)).toEqual([[-2,7], [9,10]])
})

test('get [[-3, 2], [0,1], [2,4], [5,6]] equal [[-3,4], [5,6]]', () => {
    pos = 0
    arr = [[-3, 2], [0,1], [2,4], [5,6]]
    acc = arr[0]
    expect(getPoints(acc, pos, arr)).toEqual([[-3,4], [5,6]])
  
})

test('get [] equal []', () => {
    pos = 0
    arr = []
    acc = arr[0]
    expect(getPoints(acc, pos, arr)).toEqual([])
  
})
