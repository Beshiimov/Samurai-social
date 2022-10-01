import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7411908b-0da0-454f-a299-95f359140a10",
  },
});

export const Request = {
  viewUser(userId) {
    return instance.get("/profile/" + userId);
  },

  usersPage(page) {
    return instance
      .get(`users?page=${page}`)
      .then((r) => r.data)
      .catch((e) => alert(e));
  },

  follow(userId) {
    return instance.post("follow/" + userId);
  },

  unFollow(userId) {
    return instance.delete("follow/" + userId);
  },
};

export const Auth = {
  auth() {
    return instance.get("/auth/me").catch((e) => alert(e));
  },
  login() {
    return instance.post("/auth/login");
  },
  logout() {
    return instance.delete("/auth/login");
  },
};

export const Weather = {
  loadWeather() {
    return axios.get(
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saransk?unitGroup=metric&key=4LQJ4NUWRB5WDLRDRFCLF8Z5F&contentType=json"
    );
  },
};
