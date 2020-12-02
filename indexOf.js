  function indexOf(arr, item) {

      for (let i = 0; i < arr.length; i++) {

          if (arr[i] === item) {
              return i
          }
      }
      return -1
  }

  const items = [
      'Bicycle',
      'Lego',
      'Doll',
      'Teddybear',
      'Crayons',
      'Fishing rod'
  ]

  console.log(indexOf(items, 'Lego'))
  console.log(indexOf(items, 'Teddybear'))
  console.log(indexOf(items, 'Laser sword'))
  console.log(indexOf(items, 'Playstation'))