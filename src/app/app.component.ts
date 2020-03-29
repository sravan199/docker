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
  constructor(public homePageService: HomePageService) { }
  checkhealth() {
    this.homePageService.getHealth().subscribe((response: any) => {
      this.healthResponse = response.status;
      console.log(response);
    });
  }
}
