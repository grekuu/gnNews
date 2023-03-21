import axios from "axios";

export default axios.create({
  baseURL:
    "https://newsapi.org/v2/top-headlines?country=pl&apiKey=5be44a79b15a4c10941c670b9765972e",
});
