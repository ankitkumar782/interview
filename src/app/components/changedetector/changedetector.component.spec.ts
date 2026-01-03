import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedetectorComponent } from './changedetector.component';

describe('ChangedetectorComponent', () => {
  let component: ChangedetectorComponent;
  let fixture: ComponentFixture<ChangedetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangedetectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangedetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
