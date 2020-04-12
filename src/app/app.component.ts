import { Component } from '@angular/core';
import { HomePageService } from './home-page.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendapp';
  healthResponse: any = '';
  apiHealthResponse: any = '';
  UserDetails: any;
  localHealth: any;
  constructor(public homePageService: HomePageService) { }

  ChecklocalHealth() {
    this.homePageService.localHealth().subscribe((response: any) => {
      this.localHealth = response.status;
      console.log(response);
    });
  }
  checkhealth() {
    this.homePageService.getHealth().subscribe((response: any) => {
      this.healthResponse = response.status;
      console.log(response);
    });
  }
  checkHealthapi() {
    this.homePageService.getHealthapi().subscribe((response: any) => {
      this.apiHealthResponse = response.status;
      console.log(response);
    });
  }
  checkUserDetails() {
    this.homePageService.getUserDetails().subscribe((response: any) => {
      this.UserDetails = response;
      console.log(response);
    });
  }
}
