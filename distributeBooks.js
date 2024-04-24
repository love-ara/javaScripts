
function distribute(arr){
    for (const value of arr){
     value.book += value.name+"'s book"
 }
}
console.log(distribute(["Emily", "Jack", "Sophia", "Daniel"]))


module.exports = {distribute};