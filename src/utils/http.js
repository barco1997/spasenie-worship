import axios from "axios";
//import ls from "local-storage";
import store from "../redux/store/index";
import { SpinnerAction } from "../redux/constants/action-types";

export class HttpService {
  static source = axios.CancelToken.source();
  static token = sessionStorage.getItem("token");

  static getToken() {
    return sessionStorage.getItem("token");
  }

  static setToken(token) {
    sessionStorage.setItem("token", token);
    HttpService.token = token;
  }

  static removeToken() {
    sessionStorage.removeItem("token");
    HttpService.token = null;
  }

  static get(url, options) {
    return HttpService.makeRequest({
      url,
      method: "get",
      ...options
    });
  }

  static post(url, data, options) {
    return HttpService.makeRequest({
      url,
      method: "post",
      data,
      ...options
    });
  }

  static put(url, data, options) {
    return HttpService.makeRequest({
      url,
      method: "put",
      data,
      ...options
    });
  }
  static patch(url, data, options) {
    return HttpService.makeRequest({
      url,
      method: "patch",
      data,
      ...options
    });
  }

  static delete(url, data, options) {
    return HttpService.makeRequest({
      url,
      method: "delete",
      data,
      ...options
    });
  }

  static makeRequest(config) {
    //let newConfig = config;
    let location;

    if (config.location) {
      location = config.location;
      delete config.location;
      store.dispatch({ type: SpinnerAction.START, location });
    }

    const cancelToken = this.source.token;
    const token = HttpService.getToken();

    if (config.analyticsType === "xlsx" && token) {
      config.headers = Object.assign(config.headers || {}, {
        Identity: token,
        "Content-Type": "application/json",
        "x-api-key": "n02wIwHelV3Xd9H9YSSwL6kuoJ0ZQnFy7Y3yuh69",
        Accept:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        responseType: "blob"
      });
      delete config.analyticsType;
    } else if (config.analyticsType === "csv" && token) {
      config.headers = Object.assign(config.headers || {}, {
        Identity: token,
        "Content-Type": "application/json",
        "x-api-key": "n02wIwHelV3Xd9H9YSSwL6kuoJ0ZQnFy7Y3yuh69",
        Accept: "text/csv",
        responseType: "blob"
      });
      delete config.analyticsType;
    } else if (token) {
      config.headers = Object.assign(config.headers || {}, {
        Identity: token,
        "Content-Type": "application/json",
        "x-api-key": "n02wIwHelV3Xd9H9YSSwL6kuoJ0ZQnFy7Y3yuh69"
      });
    }

    return axios
      .request({ ...config, cancelToken })
      .then(res => {
        if (res.headers.Identity) {
          HttpService.setToken(res.headers.Identity);
        }

        store.dispatch({ type: SpinnerAction.STOP, location });

        return res;
      })
      .catch(e => {
        store.dispatch({ type: SpinnerAction.STOP, location });
        console.log("error", e);
        throw e;
      });
  }
}
