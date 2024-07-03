import {Component, EventEmitter, Output} from '@angular/core';
import {AxiosService} from '../service/axios.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  //@Output() onSubmitLoginEvent = new EventEmitter();
  login: string = "";
  password: string = "";
  dashboardShow: boolean = false;

  constructor(private axiosService: AxiosService,private router: Router) {
  }

  onSubmitLogin(): void {
    this.axiosService.request(
      "POST",
      "/login",
      {
        login: this.login,
        password: this.password
      }).then(
      response => {
        this.axiosService.setAuthToken(response.data.token);
        this.router.navigate(['/dashboard']); // Redirect to dashboard on successful login
      }).catch(
      error => {
        this.axiosService.setAuthToken(null);
      }
    );
  }
}
