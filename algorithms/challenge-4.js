    function sumTwoSmallestNums(arr) {
    let add = 0;
    let sortedNum = arr.sort((b, c) => {return b-c});
    let filterNum = sortedNum.filter(filt => {return filt>=0});
    sum = filterNum[0] + filterNum[1];
    return add;
 }
 sumTwoSmallestNums([19, 5, 42, 2, 77]); //.toBe(7)
 sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) //toBe(3453455)
 sumTwoSmallestNums([2, 9, 6, -1]); //.toBe(8)
 sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]); //toBe(563)
 sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]); //toBe(4519)
 sumTwoSmallestNums([-1, -1, 1, 1]);//toBe(2)
 sumTwoSmallestNums([1, 1, 1, 1]);//toBe(2)

  module.exports =sumTwoSmallestNums