import { TestBed } from '@angular/core/testing';

import { GroceriesApiService } from './groceries-api.service';

describe('GroceriesApiService', () => {
  let service: GroceriesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroceriesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
