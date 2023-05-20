import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController, SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces : Place[] = [];
  constructor(private placeService : PlacesService, private menuController: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
  }

  onOpenMenu()
  {
    this.menuController.toggle();
  }

  onFilterUpdate(event: Event) {
    const customEvent = event as CustomEvent<SegmentChangeEventDetail>;
    console.log(customEvent.detail);
  }

}
