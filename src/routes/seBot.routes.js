import streamelements from "../config/streamelements.config.js";

const falar = async (message) => {
  await streamelements
    .post(`/bot/${process.env.STREAMELEMENTS_GUID_CHANNEL}/say`, {
      message: `${message}`,
    })
    .then((resp) => {
      //console.log(resp);
    })
    .catch((e) => {
      console.log(e);
    });
};

const adicionarpontos = async (username, pontos) => {
  await streamelements
    .put(
      `/points/${process.env.STREAMELEMENTS_GUID_CHANNEL}/${username}/${pontos}`
    ).then(()=>{
      return true;
    })
    .catch((e) => console.log(e));
};

export { falar, adicionarpontos };
