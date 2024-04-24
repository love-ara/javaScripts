function timeSchedules(arr){
    var result = arr.filter(time => time.includes("P", time.length-2))
    return result
}



module.exports = {timeSchedules};