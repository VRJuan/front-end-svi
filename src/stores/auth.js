import { defineStore } from "pinia";
import { showAlert } from "../funtions";
import axios from "axios";
axios.defaults.withCredentials = true;
export const useAuthStore = defineStore("auth", {
  state: () => ({ authUser: null, authToken: null }),
  getters: {
    user: (state) => state.authUser,
    token: (state) => state.authToken,
  },
  actions: {
    async getToken() {
      await axios.get("sanctum/csrf-cookie");
    },
    async login(form) {
      await this.getToken();
      await axios
        .post("/api/auth/iniciarsesion", form)
        .then((res) => {
          this.authToken = res.data.token;
          this.authUser = res.data.data;
          this.router.push("/");
        })
        .catch((errors) => {
          let descriptionError = "";
          errors.response.data.errors.map((e) => {
            descriptionError = descriptionError + " " + e;
          });

          showAlert(descriptionError, "error", "");
        });
    },
    async register(form) {
      await this.getToken();
      await axios
        .post("/api/auth/registrar", form)
        .then((res) => {
          showAlert(res.data.message, "success", "");
          setTimeout(() => this.router.push("/login"), 2000);
          this.router.push("/");
        })
        .catch((errors) => {
          let descriptionError = "";
          errors.response.data.errors.map((e) => {
            descriptionError = descriptionError + " " + e;
          });

          showAlert(descriptionError, "error", "");
        });
    },
    async logout() {
      await axios.get("/api/auth/cerrarsesion", this.authToken);
      this.authToken = null;
      this.authUser = null;
      this.router.push("/login");
    },
  },
  persist: true,
});
