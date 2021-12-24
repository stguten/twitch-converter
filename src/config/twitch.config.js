import axios from "axios";
import dotenv from "dotenv-safe";
dotenv.config();

const twitch = axios.create({
  baseURL: "https://api.twitch.tv/helix/",
  //timeout: 1000,
  headers: {
    Authorization: `Bearer ${process.env.TWITCH_JWT_TOKEN}`,
    "Client-Id": process.env.TWITCH_CLIENT_ID,
    "Content-Type": "application/json",
  },
});

export default twitch;
