import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat: number = 35.6329007;
  lng: number = 139.8782003;
  zoom: number = 15;
  address: string = '';

  constructor(
    public mapService: MapService,
  ) {}

  public ngOnInit() {
    this.getAddress();
  }

  public geocoding(f: NgForm) {
    let self = this;

    this.mapService.geocoding(f.value.address).then(
      rtn => {
        let location = rtn[0].geometry.location;

        self.lat = location.lat();
        self.lng = location.lng();

        // call reverse geocoding
        self.getAddress();
      }
    );
  }

  public getAddress() {
    let self = this;

    this.mapService.reverseGeocoding(this.lat, this.lng).then(
      rtn => {
        self.address = rtn[0].formatted_address;
      }
    );
  }
}
