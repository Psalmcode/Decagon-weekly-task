function filterList(arr){
        return arr.filter(x => typeof x === 'number');
     }
//TESTANSWERS
 filterList([1,2,'a','b']); //toBe(2)
 filterList([1,'a','b',0,15]);  //toBe(2)
 filterList([1,2,'aasf','1','123',123]); //toEqual([1,2,123])
 filterList(['wk', 4, 5, 6, 'yl', 'to' ]);  //toEqual([4,5,6])
 filterList([3, "Pop", 8, 9, 7,"learn" ]); //toEqual([3, 8, 9,7])
 filterList(["t", 9]); //toEqual([9])

  module.exports =filterList