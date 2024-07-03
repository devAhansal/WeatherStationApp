import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WeatherData}  from "../model/weatherdata.model"
import {AxiosService} from "./axios.service";
@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  constructor(private http: HttpClient,private axiosService: AxiosService) {
  }
  public  getWeatherData(){
    return this.http.get<Array<WeatherData>>('http://localhost:8080/api/weather',{observe:'response'});
  }

}
