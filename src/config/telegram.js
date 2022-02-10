import TeleBot from "telebot";
const tg = new TeleBot({
    token: process.env.TELEGRAM_BOT_TOKEN, 
    polling: { 
        interval: 1000,
        timeout: 0,
        retryTimeout: 2000,
    }
});

export default tg;