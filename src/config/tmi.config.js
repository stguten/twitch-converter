import tmi from 'tmi.js';
import dotenv from 'dotenv-safe';
dotenv.config();

const client = new tmi.Client({
    options: {debug: true, messagesLogLevel: "info"},
    connection: {reconnect: true, secure: true},
    identity: {username: process.env.BOT_NAME, password: process.env.BOT_TOKEN},
    channels: ['stguten']
});

export default client;