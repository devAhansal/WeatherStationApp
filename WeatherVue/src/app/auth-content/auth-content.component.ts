import { Component } from '@angular/core';
import { AxiosService } from '../service/axios.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-content',
  templateUrl: './auth-content.component.html',
  styleUrl: './auth-content.component.css'
})
export class AuthContentComponent {
  data: string[] = [];
  constructor(private axiosService: AxiosService,private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/dashboard']);
    this.axiosService.request(
      "GET",
      "/api/message",
      {}).then(
      (response) => {
        this.data = response.data;
      })
  }
}
