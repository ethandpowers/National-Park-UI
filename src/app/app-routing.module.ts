import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrossReferenceComponent } from './Components/cross-reference/cross-reference.component';
import { HomeComponent } from './Components/home/home.component';
import { NpWeatherComponent } from './Components/np-weather/np-weather.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ParkDetailsComponent } from './Components/park-details/park-details.component';
import { ParkResultsComponent } from './Components/park-results/park-results.component';
import { ReferencesComponent } from './Components/references/references.component';
import { SearchComponent } from './Components/search/search.component';
import { SpeciesResultsComponent } from './Components/species-results/species-results.component';
import { TrailSearchComponent } from './Components/trail-search/trail-search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'park-results', component: ParkResultsComponent },
  { path: 'species-results', component: SpeciesResultsComponent },
  { path: 'cross-reference', component: CrossReferenceComponent },
  { path: 'trails', component: TrailSearchComponent },
  { path: 'park-details', component: ParkDetailsComponent },
  { path: 'park-weather', component: NpWeatherComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
