import twitch from "../config/twitch.config.js";

const carregarRecompensas = async () => {
  await twitch
    .get("/channel_points/custom_rewards?broadcaster_id=130240305")
    .then((response) => {
       response.data.data.forEach(element => {
          if(element.prompt.toLowerCase().includes('[conversao]')) console.log(element);
      }); 
      //console.log(response.data);
    });
};

export { carregarRecompensas };
