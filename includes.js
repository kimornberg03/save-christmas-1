function includes(arr, item) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === item) {
            return true
        }
    }
    return false
}

const items = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
]

console.log(includes(items, 'Lego'))
console.log(includes(items, 'Teddybear'))
console.log(includes(items, 'Laser sword'))
console.log(includes(items, 'Playstation'))