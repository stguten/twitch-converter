import client from "./src/config/tmi.config.js";
import * as seBot from "./src/routes/seBot.routes.js";
import tg from "./src/config/telegram.js";

import { carregarRecompensas } from "./src/routes/crTwitch.route.js";
import dotenv from "dotenv-safe";

dotenv.config();
client.connect();
carregarRecompensas();

client.on("message",(channel, tags, message, self) => {
	tg.sendMessage(146617530,`${tags.username}: ${message}`,{ parseMode: 'html' })
})
client.on("redeem", async (channel, username, rewardType, tags, message) => {
    switch (rewardType) {
        case "814fd7c9-be2a-40b6-bcf6-d9f6d3738f01":
            if(seBot.adicionarpontos(username, 250)) seBot.falar('@'+ username + ' os frames foram adicionados a sua conta.');            
            break;
    }
});