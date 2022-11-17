// import User from "../dao/user.js";
import AxiosClient from "./axiosClient.js";
import { getHeaders } from "../utils/http.js";

const { REACT_APP_BASE_URL, REACT_APP_USERS_ENDPOINT } = process.env;
export default class UsersService {
  constructor() {
    this.client = new AxiosClient();
  }
  getUsers = (callbackSuccess, callbackError) => {
    const requestInfo = {
      url: `${REACT_APP_BASE_URL}${REACT_APP_USERS_ENDPOINT}`,
      config: getHeaders(),
      callbackSuccess,
      callbackError,
    };
    this.client.makeGetRequest(requestInfo);
  };
}
