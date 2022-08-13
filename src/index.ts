import bot from "./bot";

bot.launch().then(() => console.log(`Bot @${bot.botInfo?.username} lauched`))