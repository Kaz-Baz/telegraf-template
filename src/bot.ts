import { Telegraf } from "telegraf";

import { setupLocalizationsMiddleware } from "./bot/middlewares/setup-localizations";
import errorMiddlewre from "./bot/middlewares/error";

import { startCommandHandler } from "./bot/handlers/start";
import { DEBUG, TEST_TOKEN, TOKEN } from './config'

const bot = new Telegraf(DEBUG? TEST_TOKEN : TOKEN);

bot.catch(errorMiddlewre)

bot.use(setupLocalizationsMiddleware());

bot.start(startCommandHandler);

export default bot;