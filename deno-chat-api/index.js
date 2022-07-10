import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'

const messages = [{text: 'test1'}]

const router = new Router()

router
    .get('/', (context) => {
        context.response.body = 'Chat server!'
    })
    .get('/messages', (context) => {
        context.response.body = messages
    })
    .post('/', async (context) => {
        const message = await context.request.body().value
        messages.push(message)
        context.response.body = messages
    })

const app = new Application();

app.use(router.routes());
app.use(oakCors())
app.use(router.allowedMethods());

await app.listen({ port: 8000 });