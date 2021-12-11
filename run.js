import instance from "./src/config/axios.config.js";
import client from "./src/config/tmi.config.js";
import dotenv from 'dotenv-safe';
dotenv.config();

client.connect();

client.on('redeem', async (channel, username, rewardType, tags, message)=>{
    switch (rewardType){
        case '8f8464f1-b8cd-43b7-92a0-22ea8395fb95':
            await instance.put(`/points/${process.env.STREAMELEMENTS_GUID_CHANNEL}/${username}/10`,).then(()=> {                
                //client.say(channel,'kkkkkkkkkkkkkkk perdeu 100k kkkkkkkkkkk')
            }).catch((e)=> console.log(e))
        break;
    }
    console.log(rewardType) 
})