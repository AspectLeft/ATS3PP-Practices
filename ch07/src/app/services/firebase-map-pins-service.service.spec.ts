import { TestBed } from '@angular/core/testing';

import { FirebaseMapPinsServiceService } from './firebase-map-pins-service.service';

describe('FirebaseMapPinsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseMapPinsServiceService = TestBed.get(FirebaseMapPinsServiceService);
    expect(service).toBeTruthy();
  });
});
