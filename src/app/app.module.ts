import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CitiesListComponent } from './cities-list/cities-list.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { SharedService } from './shared/Service/shared.service';
import { EditPointofinterestComponent } from './city-details/edit-pointofinterest/edit-pointofinterest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CitiesListComponent,
    AppComponent,
    StarRatingComponent,
    CityDetailsComponent,
    EditPointofinterestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
