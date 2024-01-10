import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "d1ee11d6-55d3-40ba-9585-8c56594094ce",
  },
});

export const usersAPI = {
  async getUsers(currentPage = 1, countUsers = 5) {
    return instance
      .get(`users?page=${currentPage}&count=${countUsers}`, )
      .then((response) => {
        return response.data;
      });
  },
  // Используется в Header
  async setLogin() {
    return instance
      .get(`auth/me`, {
      })
      .then((response) => {
        return response.data;
      });
  },
  async setProfileData(userid) {
    return instance.get(`profile/` + userid).then((response) => {
      return response.data;
    });
  },
  // Подписка и отписка на и от пользователя
  async follow(userid) {
    return instance.post(`follow/${userid}`);
  },
  async unfollow(userid) {
    return instance.delete(`follow/${userid}`);
  },
};
