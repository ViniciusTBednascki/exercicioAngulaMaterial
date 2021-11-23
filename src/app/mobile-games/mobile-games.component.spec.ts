import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileGamesComponent } from './mobile-games.component';

describe('MobileGamesComponent', () => {
  let component: MobileGamesComponent;
  let fixture: ComponentFixture<MobileGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
