import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-cross-reference',
  templateUrl: './cross-reference.component.html',
  styleUrls: ['./cross-reference.component.css'],
})
export class CrossReferenceComponent implements OnInit {
  snackBar: MatSnackBar;
  private _router: Router;
  constructor(private _snackbar: MatSnackBar, private router:Router) {
    this.snackBar = _snackbar;
    this._router = router;
  }

  ngOnInit(): void {}

  handleSearchEvent(eventData: any[]) {
    this.initialSearchData = eventData[0];
    if (this.filterSearchData.length > 0) {
      this.filter();
    } else {
      this.finalData = this.initialSearchData;
    }
    if(this.finalData.length > 0){
      this.hideResults = false;
    }else{
      this.hideResults = true;
      let config = new MatSnackBarConfig();
          config.duration = 3000;
          this.snackBar.open(
            'No results found, please try again.',
            'Okay',
            config
          );
    }
  }

  handleFilterEvent(eventData: any[]) {
    this.filterSearchData = eventData[0];
    this.filterType = eventData[0];
    this.filter();
    if(this.finalData.length > 0){
      this.hideResults = false;
    }else{
      this.hideResults = true;
      let config = new MatSnackBarConfig();
          config.duration = 3000;
          this.snackBar.open(
            'No results found, please try again.',
            'Okay',
            config
          );
    }
  }

  filter() {
    this.finalData = [];
    this.initialSearchData.forEach((init: any) => {
      this.filterSearchData.forEach((filter: any) => {
        if (filter.hasOwnProperty('states')) {
          //different object type
          if(init.park == filter.name){
            this.finalData.push(init);
          }
        } else {
          //same object types
          if(_.isEqual(init, filter)){
            console.log(filter)
            this.finalData.push(filter);
          }
        }
      });
    });
    console.log(this.finalData)
  }

  generateWikiLink(str: string) {
    let str2 = str.replace(' ', '_');
    return `https://en.wikipedia.org/wiki/${str2}`;
  }

  filterType: string = '';
  finalData: any[] = [];
  initialSearchData: any[] = [];
  filterSearchData: any[] = [];
  hideResults = true;
  searchForms = [];
}
