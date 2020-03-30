import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private readonly httpClient: HttpClient) { }

  getHealth() {
    // return this.httpClient.get('http://localhost:3000/health');
    return this.httpClient.get('server-cluster-ip:3000/health');
  }
  getHealthapi() {
    return this.httpClient.get('server-cluster-ip:3000/api/health');
  }

}
