import fs from "fs"

(function (){
    const argv = process.argv
    if (argv.length <= 2) {
        console.log("nosh <filepath> [...argument]")
        return
    }

    const filepath = process.argv[2]
    const str = fs.readFileSync(filepath).toString()

    process.argv.shift()

    switch (process.env["ENGINE"]) {
        case "js":  return require("./run/js").run(str)
        case "ts":  return require("./run/ts").run(str)
        default:    return require("./run/auto").run(str)
        // TODO: why not? require is blocking, but efficient
        // case "js":  return (await import("./run/js")).run(str)
        // case "ts":  return (await import("./run/ts")).run(str)
        // default:    return (await import("./run/auto")).run(str)
    }
})()
