import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 35.6329007;
  lng: number = 139.8782003;
  zoom: number = 15;

  constructor(
    public mapService: MapService,
  ) {}

  public geocoding(f: NgForm) {
    let self = this;

    this.mapService.geocoding(f.value.address).then(
      rtn => {
        let location = rtn[0].geometry.location;

        self.lat = location.lat();
        self.lng = location.lng();
      }
    );
  }
}
