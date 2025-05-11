import axios from "axios";

export default axios.create({
  baseURL: "https://192.168.1.236:5000/api",
  headers: {
    "Content-type": "application/json",
  },
});
