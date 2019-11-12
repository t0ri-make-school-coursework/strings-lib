String.prototype.capitalize = function (option) {
  const string = String(this)
  if (string.validString()) {
    // Challenge 1: capitalize()
    // Make the first character of a given string uppercase
    if (option === 'firstLetter') {
      return string[0].toUpperCase() + string.slice(1)
    }


    // Challenge 3: capitalizeWords()
    // Make the first letter of each word uppercase
    if (option === 'allFirstLetter') {
      let capitalized = ''

      string.split(' ').forEach((word) => {
        capitalized += word.capitalize('firstLetter') + ' '
      })

      return capitalized.trim()
    }


    // Challenge 2: allCaps()
    // Makes all characters uppercase
    if (option === 'all') {
      let capitalized = ''; // spread operator below won't work without this semicolon and i hate it 😓

      [...string].forEach((char) => {
        capitalized += char.toUpperCase()
      })

      return capitalized
    }
  }
  return string
}


String.prototype.clean = function (option) {
  let string = String(this)
  if (string.validString()) {
    // Challenge 4: removeExtraSpace()
    // Remove all spaces from the beginning and end of a String
    if (option === 'trimSpaces') {
      string = string.trim()
      if (string !== '') {
        return string
      }
    }


    // Challenge 4.5: removeExtraSpaces()
    // Remove any extra spaces in the middle, and the beginning/end
    if (option === 'trimAllSpaces') {
      let cleaned = ''

      string.split(' ').forEach((word) => {
        const trimmed = word.clean('trimSpaces')
        if (trimmed !== undefined) {
          cleaned += word.clean('trimSpaces') + ' '
        }
      })

      return cleaned.trim()
    }
  }
}


String.prototype.changeCase = function (option) {
  // Challenge 5: kabobCase()
  // Removes extra spaces and replaces spaces with "-", & makes all characters lowercase
  if (option === 'kabob') {
    const string = String(this).removePunctuation().clean('trimAllSpaces')
    return string.split(' ').join('-').slice(0, string.length).toLowerCase()
  }


  // Challenge 6: snakeCase()
  // Removes extra space and replaces spaces with "_", & makes all characters lowercase
  if (option === 'snake') {
    const string = String(this).removePunctuation().clean('trimAllSpaces')
    return string.split(' ').join('_').slice(0, string.length).toLowerCase()
  }


  // Challenge 7 camelCase()
  // Lowercases the first character of the first word;
  // uppercases the first character of all other words; & removes all spaces
  if (option === 'camel') {
    const string = String(this).removePunctuation().clean('trimAllSpaces').toLowerCase()
    let capitalized = string.split(' ').map((word) => {
      if (word === string[0]) {
        return word
      }
      if (word !== '') {
        return word.capitalize('firstLetter')
      }
    })
    capitalized = capitalized.join('')
    return capitalized.charAt(0).toLowerCase() + capitalized.slice(1, string.length)
  }
}


// ⬇️ Helpers! ⬇️
// removePunctuation: filters out punctuation, keeps ' '
String.prototype.removePunctuation = function () {
  const string = String(this)
  const noPunct = [...string].filter((char) => {
    if (char === ' ') {
      return char
    }
    return char.isAlpha()
  })
  return noPunct.join('')
}

// validString: checks if string is longer than 1 (except I forgot to use it)
String.prototype.validString = function () {
  const string = String(this)
  if (string) {
    return true
  }
  return false
}

// isAlpha: checks if string is a single letter
String.prototype.isAlpha = function () {
  const string = String(this)
  return string.length === 1 && string.match(/[a-z]/i)
}


// """Test""" Methods
// function test() {
//   function capitalize(input) {
//     console.log('--- Testing Challenge 1: capitalize() ---')
//     console.log('testInput =', input)
//     console.log('testIinput.capitalize(\'firstLetter\') =', input.capitalize('firstLetter'), '\n')
//   }

//   function allCaps(input) {
//     console.log('--- Testing Challenge 2: allCaps() ---')
//     console.log('testInput =', input)
//     console.log('testIinput.capitalize(\'all\') =', input.capitalize('all'), '\n')
//   }

//   function capitalizeWords(input) {
//     console.log('--- Testing Challenge 3: capitalizeWords() ---')
//     console.log('testInput =', input)
//     console.log('testIinput.capitalize(\'allFirstLetter\') =', input.capitalize('allFirstLetter'), '\n')
//   }

//   function removeExtraSpaces(input) {
//     console.log('--- Testing Challenge 4: removeExtraSpaces() ---')
//     console.log('testInput =', input)
//     console.log('testIinput.clean(\'trimAllSpaces\') =', input.clean('trimAllSpaces'), '\n')
//   }

//   function kabobCase(input) {
//     console.log('--- Testing Challenge 5: kabobCase() ---')
//     console.log('testInput =', spaceInput)
//     console.log('testIinput.changeCase(\'kabob\') =', spaceInput.changeCase('kabob'), '\n')
//   }

//   function snakeCase(input) {
//     console.log('--- Testing Challenge 6: snakeCase() ---')
//     console.log('testInput =', spaceInput)
//     console.log('testIinput.changeCase(\'snake\') =', spaceInput.changeCase('snake'), '\n')
//   }

//   function camelCase(input) {
//     console.log('--- Testing Challenge 7: camelCase() ---')
//     console.log('testInput =', spaceInput)
//     console.log('testIinput.changeCase(\'camel\') =', spaceInput.changeCase('camel'))
//   }

//   let capitalizeInput = 'hello mitchell or ki'
//   capitalize(capitalizeInput)
//   allCaps(capitalizeInput)
//   capitalizeWords(capitalizeInput)

//   let spaceInput = '   hello Mitchell?   OR  ki!'
//   removeExtraSpaces(spaceInput)
//   kabobCase(spaceInput)
//   snakeCase(spaceInput)
//   camelCase(spaceInput)
// }

// test()
