import { Component, Input } from '@angular/core';

import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core';

declare var google: any;

/**
 * MapContentComponent
 * 
 * @export
 * @class MapContentComponent
 */
@Component({
  selector: 'map-content',
  template: ''
})
export class MapContentComponent {
  private trafficLayer: any;

  @Input() public set trafficSwitch(trafficSwitch: number) {
    this.trafficToggle(trafficSwitch);
  }

  /**
   * Creates an instance of MapContentComponent.
   * 
   * @param {GoogleMapsAPIWrapper} mapApiWrapper
   * 
   * @memberOf MapContentComponent
   */
  constructor(
    private mapApiWrapper: GoogleMapsAPIWrapper,
  ) {
    // none
  }

  /**
   * Set traffic layer
   * 
   * @param {number} state
   * 
   * @memberOf MapContentComponent
   */
  public trafficToggle(state: number) {
    let self = this;
    this.mapApiWrapper.getNativeMap()
      .then((map) => {
        self.trafficLayer = self.trafficLayer ? self.trafficLayer : new google.maps.TrafficLayer();
        let targetMap = state === 1 ? map : null;

        self.trafficLayer.setMap(targetMap);
      });
  }

}
