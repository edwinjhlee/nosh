import { compile } from "../tseval"

export async function run(content_str: string){
    try{
        const code = compile(content_str)
        console.log(compile)
        await eval(code)
    } catch (err) {
        console.log(err)
    }
}
