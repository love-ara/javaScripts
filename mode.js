
function findMode(numbers){
    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mode= []

    for (const num of numbers) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        if (frequencyMap.get(num) > maxFrequency) {
            maxFrequency = frequencyMap.get(num);
            mode = num;
        }
    }

    return mode;
}

function findMode(arr) {
    const counts = {};
    let maxCount = 0;
    let mode;

    for (const num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mode = num;
        }
    }

    return mode;
}



module.exports = {findMode};


console.log(mode([1, 1, 2, 2, 2]));
console.log(mode([3, 3, 3, 3, 1]));