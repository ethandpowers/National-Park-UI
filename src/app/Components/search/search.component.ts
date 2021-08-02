import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() searchParks?: boolean = true;
  @Input() redirectToResults?: boolean = true;
  @Input() searchTrails?: boolean = false;
  @Output() searchEvent = new EventEmitter<any[]>();
  private readonly http;

  constructor(
    private _snackbar: MatSnackBar,
    http: HttpClient,
    router: Router
  ) {
    this.snackBar = _snackbar;
    this.data = [];
    this.http = http;
    this.router = router;
  }

  ngOnInit(): void {
    if (this.searchParks) {
      this.searchOptions = [
        {
          name: 'Parks',
          params: ['Park Code', 'Park Name', 'State'],
        },
        {
          name: 'Species',
          params: [
            'Id',
            'Common Name',
            'Scientific Name',
            'Category',
            'Order',
            'Family',
            'Conservation Status',
            'Seasonality',
            'Abundance',
          ],
        },
      ];
    } else if (!this.searchTrails) {
      this.searchOptions = [
        {
          name: 'Species',
          params: [
            'Id',
            'Common Name',
            'Scientific Name',
            'Category',
            'Order',
            'Family',
            'Conservation Status',
            'Seasonality',
            'Abundance',
          ],
        },
      ];
    } else {
      this.searchOptions = [
        {
          name: 'Trails',
          params: [
            'Id',
            'Name',
            'Area',
            'City',
            'Feature',
            'Activity'
          ],
        },
      ];
    }
  }

  async GetData() {
    let controller = '';
    if (this.searchParks) {
      if (this.searchOptions[1].params.includes(this.searchParam)) {
        controller = 'species';
      } else {
        controller = 'natpark';
      }
    }else if(!this.searchTrails){
      controller = 'species';
    }
    else{
      controller = 'trails'
    }
    let searchParameter = '';
    let endpoint = 'by' + this.searchParam.split(/\s+/).join('');
    if (this.searchParam == 'Park Code') {
      searchParameter = 'code';
    }
    if (this.searchParam == 'Park Name') {
      searchParameter = 'name';
    }
    if (this.searchParam == 'State') {
      searchParameter = 'state';
    }
    if (this.searchParam == 'Id') {
      searchParameter = 'id';
    }
    if (this.searchParam == 'Common Name') {
      searchParameter = 'name';
    }
    if (this.searchParam == 'Scientific Name') {
      searchParameter = 'name';
    }
    if (this.searchParam == 'Category') {
      searchParameter = 'category';
    }
    if (this.searchParam == 'Order') {
      searchParameter = 'order';
    }
    if (this.searchParam == 'Family') {
      searchParameter = 'family';
    }
    if (this.searchParam == 'Conservation Status') {
      searchParameter = 'status';
    }
    if (this.searchParam == 'Seasonality') {
      searchParameter = 'seasonality';
    }
    if (this.searchParam == 'Abundance') {
      searchParameter = 'abundance';
    }if (this.searchParam == 'ID') {
      searchParameter = 'id';
    }
    if (this.searchParam == 'Name') {
      searchParameter = 'name';
    }
    if (this.searchParam == 'Area') {
      searchParameter = 'area';
    }if (this.searchParam == 'City') {
      searchParameter = 'city';
    }
    if (this.searchParam == 'Feature') {
      searchParameter = 'feature';
    }
    if (this.searchParam == 'Activity') {
      searchParameter = 'activity';
    }
    this.hiddenButton = true;
    let response = this.http
      .get<any>(
        `http://localhost:6600/api/${controller}/${endpoint}?${searchParameter}=${this.searchValue}`,
        { observe: 'response' }
      )
      .subscribe(
        (data) => {
          this.hiddenButton = false;
          this.data = data.body;
          console.log(this.data);

          response.unsubscribe();
          this.searchEvent.emit([this.data, searchParameter]);
          if (this.redirectToResults) {
            if (controller == 'species') {
              this.router.navigate(['species-results'], {
                state: { data: this.data },
                queryParams: { refresh: new Date().getTime() },
              });
            } else {
              this.router.navigate(['park-results'], {
                state: { data: this.data },
                queryParams: { refresh: new Date().getTime() },
              });
            }
          }
        },
        (error) => {
          this.hiddenButton = false;
          let config = new MatSnackBarConfig();
          config.duration = 3000;
          this.snackBar.open(
            'No results found, please try again.',
            'Okay',
            config
          );
          return;
        }
      );
  }

  checkForm() {
    if (this.searchParam == '' || this.searchValue == '') {
      let config = new MatSnackBarConfig();
      config.duration = 3000;
      this.snackBar.open('Please enter valid information', 'Okay', config);
    } else {
      this.GetData();
    }
  }

  onKeystroke(value: string) {
    this.searchValue = value;
  }

  searchOptions: any[] = [];
  searchParam: string = '';
  searchValue: string | number = '';
  snackBar: MatSnackBar;
  router: Router;
  data: any[] = [];
  hiddenButton:boolean = false;
}
