import {Component, OnInit, Renderer2} from '@angular/core';
import {WeatherDataService} from "../service/weather-data.service";
import {WeatherData} from "../model/weatherdata.model";
import {Router} from '@angular/router';
import {AxiosService} from "../service/axios.service";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // note the plural 'styleUrls'
})
export class DashboardComponent implements OnInit {

  public WeatherData: Array<WeatherData> = [];
  isAuthenticated: boolean = false;


  constructor(private WeatherDataService: WeatherDataService, private renderer: Renderer2,private router: Router,private axiosService: AxiosService) {
  }

  ngOnInit(): void {
    this.isAuthenticated = this.axiosService.getAuthToken() !== null;
    if (this.isAuthenticated) {
      this.getWeatherData();
      this.initDropdownMenu();
    }else{
      this.router.navigate(['/login']);
    }
  }

  getWeatherData(): void {
    this.axiosService.getWeatherData()
      .then((data: WeatherData[]) => {
        this.WeatherData = data;
      })
      .catch(error => {
        console.error('Error fetching weather data in component:', error);
      });
  }

  initDropdownMenu() {
    const userMenuButton = document.getElementById('user-menu-button');
    const userMenu = document.querySelector('[role="menu"]');

    if (userMenuButton && userMenu) {
      this.renderer.listen(userMenuButton, 'click', () => {
        const isHidden = userMenu?.classList.contains('hidden');
        if (isHidden) {
          this.renderer.removeClass(userMenu, 'hidden');
        } else {
          this.renderer.addClass(userMenu, 'hidden');
        }
      });
    } else {
      console.warn('User menu button or user menu not found in the DOM.');
    }
  }

  logout(): void {
    this.axiosService.logout();
    this.router.navigate(['/login']);
  }
}
