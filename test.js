const typeOf = require('just-typeof')

console.log(`process.env.TEST_VAR: ${process.env.TEST_VAR}`)
console.log(typeOf(process.env.TEST_VAR))
