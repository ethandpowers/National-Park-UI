import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, RouterEvent } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-species-results',
  templateUrl: './species-results.component.html',
  styleUrls: ['./species-results.component.css'],
})
export class SpeciesResultsComponent implements OnInit {
  data: any[];
  http: HttpClient;

  constructor(
    private _router: Router,
    private activatedRoute: ActivatedRoute,
    http: HttpClient
  ) {
    this.data = history.state.data;
    this.http = http;
    if (this.data == undefined) {
      this._router.navigate(['404']);
      return;
    }
    console.log(this.data);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      const refresh = paramMap.get('refresh');
      if (refresh) {
        this.data = history.state.data;
      }
    });
  }

  generateWikiLink(str: string) {
    let str2 = str.replace(' ', '_');
    return `https://en.wikipedia.org/wiki/${str2}`;
  }
}
