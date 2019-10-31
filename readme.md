![npm](https://img.shields.io/npm/v/@t0ri/strings)
[![Build Status](https://travis-ci.com/t0ri/strings-lib.svg?branch=master)](https://travis-ci.com/t0ri/strings-lib)
[![Coverage Status](https://coveralls.io/repos/github/t0ri/strings-lib/badge.svg?branch=master)](https://coveralls.io/github/t0ri/strings-lib?branch=master)
![GitHub stars](https://img.shields.io/github/stars/t0ri/FEW2.1-libs)
![GitHub last commit](https://img.shields.io/github/last-commit/t0ri/FEW2.1-libs)
![GitHub issues](https://img.shields.io/github/issues/t0ri/FEW2.1-libs)
![number one badge](https://img.shields.io/badge/tori's-best%20badge-fff0f5)
![number one badge](https://img.shields.io/badge/wow-what%20%20a%20neat%20badge-f5d87e)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/t0ri/FEW2.1-libs)


# A String Library
## from your friend Tori
:wave: :wave: :wave:

### string.capitalize()
A capitalization method with many options.

`let string = 'hello how are you'`

`string.capitalize('all')` -> output: HELLO HOW ARE YOU

`string.capitalize('firstLetter')` -> output: Hello how are you

`string.capitalize('allFirstLetter')` -> output: Hello How Are You

### string.clean()
A method that will clean spaces from your strings.

`let string = ' hello how   are  you    '`

`string.clean('trimSpaces')` -> output: 'hello how   are  you'

`string.clean('trimAllSpaces')` -> output: 'hello how are you'

### string.changeCase()
A method that will change the casing of your code.

`let string = ' hello    how are  you?'`

`string.changeCase('kabob')` -> output: hello-how-are-you

`string.changeCase('snake')` -> output: hello_how_are_you

`string.changeCase('camel')` -> output: helloHowAreYou