import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-park-details',
  templateUrl: './park-details.component.html',
  styleUrls: ['./park-details.component.css'],
})
export class ParkDetailsComponent implements OnInit {
  activatedRoute: ActivatedRoute;
  park: any;
  parkData:any = {'entranceFees':['0.00']};
  eventData:any = [];
  http:HttpClient;
  responsiveOptions:any;

  constructor(activatedRoute: ActivatedRoute, private router: Router, http:HttpClient) {
    this.activatedRoute = activatedRoute;
    this.http = http;
    this.park = history.state.data;
    if (this.park == undefined) {
      this.router.navigate(['404']);
      return;
    }

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];

  }

  ngOnInit(): void {
    let response = this.http
      .get<any>(`https://developer.nps.gov/api/v1/parks?parkCode=${this.park.code}&api_key=hPUUjjBgGiPJ5I2pVRo7bcax069uhqqA6pBlH2aS`, { observe: 'response' })
      .subscribe((data) => {
        this.parkData = data.body;;
        this.parkData = this.parkData.data[0];
        console.log(this.parkData)
        response.unsubscribe();
      });

      let eventResponse = this.http
      .get<any>(`https://developer.nps.gov/api/v1/events?parkCode=${this.park.code}&api_key=hPUUjjBgGiPJ5I2pVRo7bcax069uhqqA6pBlH2aS`, { observe: 'response' })
      .subscribe((data) => {
        this.eventData = data.body;;
        this.eventData = this.eventData.data;
        console.log(this.eventData)
        eventResponse.unsubscribe();
      });
  }

  getWeather(){
    this.router.navigate(['park-weather'], {
      state: { data: this.parkData },
      queryParams: { refresh: new Date().getTime() },
    });
  }
}
