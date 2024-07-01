import { Component, OnInit, Renderer2 } from '@angular/core';
import { WeatherDataService } from "../service/weather-data.service";
import { WeatherData } from "../model/weatherdata.model";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'], // note the plural 'styleUrls'
})
export class DashboardComponent implements OnInit {
  public WeatherData: Array<WeatherData> = [];

  constructor(private WeatherDataService: WeatherDataService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.getWeatherData();
    this.initDropdownMenu();
  }

  getWeatherData(): void {
    this.WeatherDataService.getWeatherData()
      .subscribe({
        next: (resp) => {
          this.WeatherData = resp.body as WeatherData[];
        },
        error: err => {
          console.log(err)
        }
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
}
