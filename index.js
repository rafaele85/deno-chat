import { Application } from 'https://deno.land/x/oak/mod.ts'

const app = Application()

app.use( (ctx) => {
    ctx.response.body = 'Hello world 3'
})

addEventListener("fetch", app.fetchEventHandler())