require('../index')

// Challenge 1: capitalize()
// Make the first character of a given string uppercase
test('\'hello world\'.capitalize(\'firstLetter\')', () => {
  expect('hello world'.capitalize('firstLetter')).toBe('Hello world')
  expect('this is a string'.capitalize('firstLetter')).toBe('This is a string')

  expect(''.capitalize('firstLetter')).toBe('')
})


// Challenge 3: capitalizeWords()
// Make the first letter of each word uppercase
test('\'hello world\'.capitalize(\'all\')', () => {
  expect('hello world'.capitalize('all')).toBe('HELLO WORLD')
  expect('this is a string'.capitalize('all')).toBe('THIS IS A STRING')

  expect(''.capitalize('all')).toBe('')
})


// Challenge 2: allCaps()
// Makes all characters uppercase
test('\'hello world\'.capitalize(\'allFirstLetter\')', () => {
  expect('hello world'.capitalize('allFirstLetter')).toBe('Hello World')
  expect('this is a string'.capitalize('allFirstLetter')).toBe('This Is A String')

  expect(''.capitalize('allFirstLetter')).toBe('')
})

// Challenge 4: removeExtraSpace()
// Remove all spaces from the beginning and end of a String
test('\' hello world \'.clean(\'trimSpaces\')', () => {
  expect(' hello world '.clean('trimSpaces')).toBe('hello world')
  expect(' this is a string '.clean('trimSpaces')).toBe('this is a string')
})


// Challenge 4.5: removeExtraSpaces() 
// Remove any extra spaces in the middle, and the beginning/end
test('\' hello   world \'.clean(\'trimAllSpaces\')', () => {
  expect(' hello   world '.clean('trimAllSpaces')).toBe('hello world')
  expect(' this  is     a string '.clean('trimAllSpaces')).toBe('this is a string')
})


// Challenge 5: kabobCase()
// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase
test('\'hello world\'.changeCase(\'kabob\')', () => {
  expect('hello world'.changeCase('kabob')).toBe('hello-world')
  expect('this is a string'.changeCase('kabob')).toBe('this-is-a-string')
})


// Challenge 6: snakeCase()
// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
test('\'hello world\'.changeCase(\'snake\')', () => {
  expect('hello world'.changeCase('snake')).toBe('hello_world')
  expect('this is a string'.changeCase('snake')).toBe('this_is_a_string')
})


// Challenge 7 camelCase()
// Lowercases the first character of the first word; uppercases the first character of all other words; and removes all spaces
test('\'hello world\'.changeCase(\'camel\')', () => {
  expect('hello world'.changeCase('camel')).toBe('helloWorld')
  expect('this is a string'.changeCase('camel')).toBe('thisIsAString')
})