import { compile } from "../tseval"

export async function run(content_str: string){

    let code: string | null = null
    try{
        code = compile(content_str)
    } catch (err) {
        console.log(err)
    }

    try{
        if (null === code) {
            await eval(content_str)
        } else {
            await eval(code)
        }
    } catch (err) {
        console.log(err)
    }
}