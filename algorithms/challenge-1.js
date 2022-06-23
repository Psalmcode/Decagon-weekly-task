  function secondLargest(arr) {
  let secondLargestArr = arr.sort(function (u, v) {return v-u;});
  return secondLargestArr[1];
}
//TestAnswers
secondLargest([6, 3, 0, 30, 7]) //toBe(7)
secondLargest([71, 33, 3, 51, 18, 6]) //toBe(51)
secondLargest([42, 68, 22, 60, 7]) //toBe(60)
secondLargest([19, 2, 73, 44, 27, 9]) //toBe(44)
secondLargest([10, 9, 69, 30, 10]) //toBe(30)
secondLargest([0, 1, 2, 3, 4]) //toBe(3)
secondLargest([2, 30, 4, 57, 6, 9, 100]) //toBe(57)

module.exports = secondLargest
