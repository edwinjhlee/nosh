export async function run(content_str: string){
    try{
        await eval(content_str)
    } catch (err) {
        console.log(err)
    }
}