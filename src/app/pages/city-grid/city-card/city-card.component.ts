import { CityProperties } from './../../../core/interfaces/city.interface';
import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {

  constructor() { }
  @Input() cityData!: CityProperties;
  @Output() nukeEvent: EventEmitter<void> = new EventEmitter();
  @Output() growEvent: EventEmitter<void> = new EventEmitter();

  nuke(cityId) {
    this.nukeEvent.emit(cityId);
  }

  grow(cityId) {
    this.growEvent.emit(cityId);
  }

  ngOnInit(): void {}

}
