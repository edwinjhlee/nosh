console.log(process.argv)

// Make sure there is no other injection in src/run/ts:run()
console.log(eval("console.log(compile)"))


