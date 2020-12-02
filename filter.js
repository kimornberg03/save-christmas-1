function filter(arr, func) {

    const newArr = []
    let pos = 0

    for (let i = 0; i < arr.length; i++) {

        if (func(arr[i])) {

            newArr[pos] = arr[i]
            pos = pos + 1
        }
    }

    return newArr
}
// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = filter(numbers, x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
const numbers2 = [2, 5, 7, 10, 2, 25, 9, 17, 1, 4, 12, 4, 8]
const notDivadeWithTwo = filter(numbers2, x => x % 2)
console.log(notDivadeWithTwo)


// TEST 3 - skriv själv
const strings = ["Nej", "Ja", "Kanske", "Ok", "Självklart", "Aldrig"]
const filtredStrings = filter(strings, x => x.length < 3)
console.log(filtredStrings)