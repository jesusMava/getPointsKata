import getPoints from './getPoints'

let pos = 0
let arr = [] 
let acc = []
let result = []

test('get [[1, 3], [2, 4], [5, 6]] equal [[1, 4], [5, 6]]', () => {
  pos = 0
  arr = [[1, 3], [2, 4], [5, 6]] 
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[ 1, 4 ], [ 5, 6 ]])
})

test('get [[-2, 2], [2, 4], [4, 7], [9, 10]] equal [[-2, 7], [9, 10]]', () => {
  pos = 0
  arr = [[-2, 2], [2, 4], [4, 7], [9, 10]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[-2, 7], [9, 10]])
})

test('get [[-3, 2], [0, 1], [2, 4], [5, 6]] equal [[-3, 4], [5, 6]]', () => {
  pos = 0
  arr = [[-3, 2], [0, 1], [2, 4], [5, 6]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([ [ -3, 4 ], [ 5, 6] ])

})

test('get [] equal []', () => {
  pos = 0
  arr = []
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([])

})

test('get [[1, 2], [3, 4], [5, 6]] equal [[1, 2], [3, 4], [5, 6]]', () => {
  pos = 0
  arr =[[1, 2], [3, 4], [5, 6]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[1, 2], [3, 4], [5, 6]])
})

test('get [[0, 2], [1, 4], [5, 6], [7, 8]] equal [[0, 4], [5, 6], [7, 8]]', () => {
  pos = 0
  arr = [[0, 2], [1, 4], [5, 6], [7, 8]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[0, 4], [5, 6], [7, 8]])

})

test('get [[-13, 2], [0, -8], [2, 4], [5, 6]] equal [[-13, 4], [5, 6]]', () => {
  pos = 0
  arr = [[-13, 2], [0, -8], [2, 4], [5, 6]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[-13, 4], [5, 6]])
})

test('get [[-13, 2], [0, -8], [2, 4]] equal [[-13, 4]]', () => {
  pos = 0
  arr = [[-13, 2], [0, -8], [2, 4]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[-13, 4]])
})

test('get [[-13, 2], [0, 8], [2, 4]] equal [[-13, 8]]', () => {
  pos = 0
  arr = [[-13, 2], [0, 8], [2, 4]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[-13, 8]])

})

test('get [[1, 4], [6, 9], [15, 76]] equal [[1, 2], [3, 4], [5, 6]]', () => {
  pos = 0
  arr = [[1, 4], [6, 9], [15, 76]]
  acc = arr[0]
  expect(getPoints(result, acc, pos, arr)).toEqual([[1, 4], [6, 9], [15, 76]])

})
