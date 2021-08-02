import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-np-alerts',
  templateUrl: './np-alerts.component.html',
  styleUrls: ['./np-alerts.component.css'],
})
export class NpAlertsComponent implements OnInit {
  @Input() park: any;
  http: HttpClient;
  alerts: any;

  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
    let response = this.http
      .get<any>(`https://developer.nps.gov/api/v1/alerts?parkCode=${this.park.code}&api_key=hPUUjjBgGiPJ5I2pVRo7bcax069uhqqA6pBlH2aS`, { observe: 'response' })
      .subscribe((data) => {
        this.alerts = data.body;

        response.unsubscribe();
      });
  }

  getAlertColor(alert:any){
    if(alert.category == 'Information'){
      return 'information';
    }
    else if(alert.category == 'Caution'){
      return 'caution';
    }
    else if(alert.category == 'Danger'){
      return 'danger';
    }
    else if(alert.category == 'Park Closure'){
      return 'park-closure';
    }
    else{
      return 'other';
    }
  }

  getAlertIcon(alert:any){
    if(alert.category == 'Information'){
      return 'bi-info-circle';
    }
    else if(alert.category == 'Caution'){
      return 'bi-exclamation-triangle';
    }
    else if(alert.category == 'Danger'){
      return 'bi-exclamation-diamond';
    }
    else if(alert.category == 'Park Closure'){
      return 'bi-slash-square';
    }
    else{
      return 'other';
    }
  }
}
