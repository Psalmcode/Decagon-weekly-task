function filterArray(arr) {
 let filteredArr =[];
 for(let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== "string"){
        filteredArr.push(arr[i]);
    }
 }
 return filteredArr;
}
console.log(filterArray([1, 2, "a", "b"])) //toEqual([1,2])
console.log(filterArray([4, "z", "f", 5])) //toEqual([4,5])
console.log(filterArray(["$%^", 567, "&&&"])) //toEqual([567])
filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]) //toEqual([43, 76, 88])
filterArray([16, "op", 20, "[[", 24, 26, "yy"]) //toEqual([16, 20, 24, 26 ])
filterArray([1, "a", "b", 0, 15]) //toEqual([1, 0, 15])
filterArray([1, 2, "aasf", "1", "123", 123]) //toEqual([1, 2, 123])
module.exports = filterArray