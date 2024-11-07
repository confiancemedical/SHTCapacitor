import { TestBed, inject } from '@angular/core/testing';
import { RestProvider } from './rest.service';

describe('Service: Rest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestProvider]
    });
  });

  it('should ...', inject([RestProvider], (service: RestProvider) => {
    expect(service).toBeTruthy();
  }));
});
