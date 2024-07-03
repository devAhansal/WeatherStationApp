import { Injectable } from '@angular/core';
import axios from 'axios';
import {WeatherData} from "../model/weatherdata.model";
@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:8080';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }
  getAuthToken(): string | null {
    return window.localStorage.getItem("auth_token");
  }

  setAuthToken(token: string | null): void {
    if (token !== null) {
      window.localStorage.setItem("auth_token", token);
    } else {
      window.localStorage.removeItem("auth_token");
    }
  }
  request(method: string, url: string, data: any): Promise<any> {
    let headers: any = {};

    if (this.getAuthToken() !== null) {
      headers = {"Authorization": "Bearer " + this.getAuthToken()};
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }

  getWeatherData(): Promise<WeatherData[]> {
    return this.request('GET', '/api/weather', null)
      .then(response => {
        return response.data as WeatherData[]; // Assuming WeatherData is your model or interface
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        throw error; // Optionally handle error or re-throw for component to handle
      });
  }

  logout(): void {
    this.setAuthToken(null);
  }
}
