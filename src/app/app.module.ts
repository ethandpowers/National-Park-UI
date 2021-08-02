import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SearchComponent } from './Components/search/search.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ReferencesComponent } from './Components/references/references.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ParkResultsComponent } from './Components/park-results/park-results.component';
import { SpeciesResultsComponent } from './Components/species-results/species-results.component';
import {MatTableModule} from '@angular/material/table';
import { TransitionComponent } from './Components/transition/transition.component';
import { FooterComponent } from './Components/footer/footer.component';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { CrossReferenceComponent } from './Components/cross-reference/cross-reference.component';
import { TrailSearchComponent } from './Components/trail-search/trail-search.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ParkDetailsComponent } from './Components/park-details/park-details.component';
import { NpAlertsComponent } from './Components/np-alerts/np-alerts.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { NpWeatherComponent } from './Components/np-weather/np-weather.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    PageNotFoundComponent,
    HomeComponent,
    ReferencesComponent,
    ParkResultsComponent,
    SpeciesResultsComponent,
    TransitionComponent,
    FooterComponent,
    CrossReferenceComponent,
    TrailSearchComponent,
    ParkDetailsComponent,
    NpAlertsComponent,
    NpWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    CarouselModule,
    ButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
