import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { MapService } from '../services/map.service';
import { MapContentComponent } from '../components/map/map-content.component';

@NgModule({
  declarations: [
    AppComponent,
    MapContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'YourAPIKEY'
    })
  ],
  providers: [
    MapService,
  ],
  bootstrap: [
    AppComponent,
    ]
})
export class AppModule { }
