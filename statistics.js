let array = [2, 0, 7, 5, 1, 2]


function max(arr) {

    let maxValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i]
        }
    }

    return maxValue
}



function min(arr) {

    let minValue = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (minValue > arr[i]) {
            minValue = arr[i]
        }
    }

    return minValue
}

function mean(arr) {
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }

    if (arr.length != 0) {
        return sum / arr.length
    } else {
        return 0
    }
}


console.log(mean(array))
console.log(min(array))
console.log(max(array))