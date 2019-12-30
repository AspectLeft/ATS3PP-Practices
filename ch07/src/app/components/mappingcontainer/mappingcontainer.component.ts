/// <reference path='../../../../node_modules/bingmaps/types/MicrosoftMaps/Microsoft.Maps.All.d.ts' />

import { Component, OnInit } from '@angular/core';
import {MapEvents} from '../../general/MapEvents';
import {FirebaseMapPinsServiceService} from '../../services/firebase-map-pins-service.service';
import {PointsOfInterestService} from '../../services/points-of-interest.service';
import {PinsModel} from '../../general/PinsModel';

@Component({
  selector: 'atsp-mappingcontainer',
  templateUrl: './mappingcontainer.component.html',
  styleUrls: ['./mappingcontainer.component.scss']
})
export class MappingcontainerComponent implements OnInit {

  private map: Microsoft.Maps.Map;
  private mapEvents: MapEvents;
  constructor(private readonly firebaseMapPinsServiceService: FirebaseMapPinsServiceService,
              private poi: PointsOfInterestService) { }

  ngOnInit() {
  }

  MapLoaded(map: Microsoft.Maps.Map) {
    this.map = map;
    this.mapEvents = new MapEvents(this.map, new PinsModel(this.firebaseMapPinsServiceService), this.poi);
  }
}
