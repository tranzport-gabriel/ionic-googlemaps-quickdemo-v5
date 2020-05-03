import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  MapTypeId,
  Environment
} from '@ionic-native/google-maps';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-tile-overlay',
  templateUrl: './tile-overlay.page.html',
  styleUrls: ['./tile-overlay.page.scss'],
})
export class TileOverlayPage implements OnInit {

  map: GoogleMap;
  layers = [];

  constructor(private platform: Platform) { }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }
  loadMap() {

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': '(YOUR_API_KEY_IS_HERE)',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyBzTWTKaMEeABaeBSa3_E6ZMxseK4xXl4k'  // optional
    });
    this.map = GoogleMaps.create('map_canvas', {
      'mapType': MapTypeId.NONE
    });

    [
      "https://stamen-tiles.a.ssl.fastly.net/toner/{zoom}/{x}/{y}.png",
      "https://stamen-tiles.a.ssl.fastly.net/watercolor/{zoom}/{x}/{y}.jpg"
    ].forEach((layerUrl: string, idx: number) => {

      let layer = this.map.addTileOverlaySync({
        zIndex: idx,
        getTile: (x: number, y: number, zoom: number) => {
          return layerUrl.replace("{zoom}", zoom + "")
                    .replace("{x}", x + "")
                    .replace("{y}", y + "");
        }
      });
      this.layers.push(layer);
    });

  }

  onButtonClick() {
    this.layers = this.layers.reverse();
    this.layers.forEach((layer: any, idx: number) => {
      layer.setZIndex(idx);
    });
  }
}
