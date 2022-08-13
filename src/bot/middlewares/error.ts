import { Context } from 'telegraf';


export default (err: unknown, ctx: Context) => {
    console.log(`ERROR: chatId: ${ctx.chat?.id} ${ctx.updateType}`, err);
}