import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPlants } from './api-plants';

describe('ApiPlants', () => {
  let component: ApiPlants;
  let fixture: ComponentFixture<ApiPlants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPlants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPlants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
