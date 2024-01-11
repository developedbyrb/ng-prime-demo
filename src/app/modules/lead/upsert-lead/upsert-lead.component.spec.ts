import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertLeadComponent } from './upsert-lead.component';

describe('UpsertLeadComponent', () => {
  let component: UpsertLeadComponent;
  let fixture: ComponentFixture<UpsertLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsertLeadComponent]
    });
    fixture = TestBed.createComponent(UpsertLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
