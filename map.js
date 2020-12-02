function map(arr, func) {
    const newArr = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = func(arr[i])
    }

    return newArr
}

console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray)
console.log(numberArray)

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray)
console.log(stringArray)

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const divadeArray = [2, 5, 10]
const newDivadeArray = map(divadeArray, x => x / 2)
console.log(newDivadeArray)
console.log(divadeArray)