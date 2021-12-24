import axios from "axios";
import dotenv from "dotenv-safe";
dotenv.config();

const streamelements = axios.create({
  baseURL: "https://api.streamelements.com/kappa/v2",
  //timeout: 1000,
  headers: {
    Accept: "*/*",
    Authorization: `Bearer ${process.env.STREAMELEMENTS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export default streamelements;
