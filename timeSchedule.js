function timeSchedules(arr){
  return arr.filter((time) => time >= "12:00");
}


module.exports = {timeSchedules};