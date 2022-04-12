import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamadminComponent } from './sanphamadmin.component';

describe('SanphamadminComponent', () => {
  let component: SanphamadminComponent;
  let fixture: ComponentFixture<SanphamadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanphamadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanphamadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
