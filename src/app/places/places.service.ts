import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places : Place[] = [
    new Place('p1', 'Manhattan Mansion', 'In the heart of New York City', "https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg", 200.00),
    new Place('p2', 'Arena Capacabana Hotel', 'In the heart of Rio de Janeiro', "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ef/89/43/arena-copacabana-hotel.jpg?w=700&h=-1&s=1", 150.00),
    new Place('p3', 'The Foggy Palce', 'Not your avarage city trip', "https://static01.nyt.com/images/2016/12/11/magazine/11voyages1/11mag-11voyages-t_CA0-master1050.jpg", 99.00),
  ];

  get places(){
    return [...this._places];
  }

  getPlace(id: string)
  {
    return {...this._places.find(x=>x.id == id)}
  }

  constructor() { }
}
