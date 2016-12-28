import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = 35.6329007;
  lng: number = 139.8782003;
  zoom: number = 12;

  public geocoding(f: NgForm) {
    console.log(f.value.address);
  }
}
