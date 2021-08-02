import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-trail-search',
  templateUrl: './trail-search.component.html',
  styleUrls: ['./trail-search.component.css']
})
export class TrailSearchComponent implements OnInit {

  snackBar: MatSnackBar;
  constructor(private _snackbar: MatSnackBar) {
    this.snackBar = _snackbar;
  }

  ngOnInit(): void {
  }

  handleSearchEvent(eventData: any[]) {
    this.data = eventData[0];
    if(this.data.length > 0){
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

  generateAllTrailsLink(trail:any){
    let name = trail.name.replace(/ /g, "-");
    return `https://www.alltrails.com/trail/us/${trail.state}/${name}`
  }

  data:any[] = [];
  hideResults = true;
  searchForms = [];
}
