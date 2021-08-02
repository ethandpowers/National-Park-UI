import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-park-results',
  templateUrl: './park-results.component.html',
  styleUrls: ['./park-results.component.css']
})
export class ParkResultsComponent implements OnInit {
  data: any[];

  constructor(private _router: Router, private activatedRoute: ActivatedRoute) {
    this.data = history.state.data;
    if (this.data == undefined) {
      this._router.navigate(['404']);
      return;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.data = history.state.data;
      }
    });
  };

  getParkPage(park:any){
    this._router.navigate(['park-details'], {
      state: { data: park },
      queryParams: { refresh: new Date().getTime() },
    });
  }

  generateWikiLink(str: string) {
    let str2 = str.replace(" ", "_");
    return `https://en.wikipedia.org/wiki/${str2}`;
  }
}
