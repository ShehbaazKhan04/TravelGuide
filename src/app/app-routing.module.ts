import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [  
  {path:'cities', component: CitiesListComponent},
  {path:'cities/:id', component: CityDetailsComponent},
  {path:'welcome', component: WelcomeComponent},
  {path:'**', redirectTo:'welcome',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
