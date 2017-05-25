import { ActivatedRoute, Data } from '@angular/router';
import { Component } from '@angular/core';
import { inject, TestBed } from '@angular/core/testing';

/**
 * Load the implementations that should be tested.
 */
import { BookingsComponent } from './bookings.component';

describe('Bookings', () => {
  /**
   * Provide our implementations or mocks to the dependency injector
   */
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      /**
       * Provide a better mock.
       */
      {
        provide: ActivatedRoute,
        useValue: {
          data: {
            subscribe: (fn: (value: Data) => void) => fn({
              yourData: 'yolo'
            })
          }
        }
      },
      BookingsComponent
    ]
  }));

  it('should log ngOnInit', inject([BookingsComponent], (about: BookingsComponent) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
