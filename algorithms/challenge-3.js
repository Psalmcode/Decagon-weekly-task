function sumMix(arr) {
   let  Add = 0;
   let arrFigure = arr.map((a)  => {
    return parseInt(a);
   });
   let arrAdd = arrFigure.map((item) => {
    return (Add += item);
   });
   const total = arrAdd.pop();
   return total;
 }
//TESTANSWERS
sumMix([9, 3, "7", "3"]); //.toStrictEqual(22)
sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]); //.toStrictEqual(42)
sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]); //.toStrictEqual(41)
sumMix([1, "5", 6, 7]); //.toStrictEqual(19)
sumMix([10, 60, "80", 10]); //toStrictEqual(160)
sumMix(["1", 2, 3, "9", 10]); //toStrictEqual(25) 
sumMix(["5", 6, "7"]); //toStrictEqual(18)

  module.exports = sumMix