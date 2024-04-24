function cal(arr){
    let total = 0;
    for(let key in arr){
        total += arr[key];
   }

    return total
}

let list ={ "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 };

console.log(cal(list));
module.exports = {cal};
