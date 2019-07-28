import fs from "fs"

(function (){
    const argv = process.argv
    if (argv.length <= 2) {
        console.log("nosh <filepath> [...argument]")
        return
    }

    const filepath = process.argv[2]
    const str = fs.readFileSync(filepath).toString()
    if (process.env["NOSH"] !== "js") {
        let compiled = require("./tseval").compile(str)
        eval(compiled)
        return
    }

    eval(str)
})()
