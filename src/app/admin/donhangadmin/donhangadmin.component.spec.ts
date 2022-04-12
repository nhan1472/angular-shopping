import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonhangadminComponent } from './donhangadmin.component';

describe('DonhangadminComponent', () => {
  let component: DonhangadminComponent;
  let fixture: ComponentFixture<DonhangadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonhangadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonhangadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
