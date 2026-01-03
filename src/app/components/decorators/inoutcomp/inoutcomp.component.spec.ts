import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutcompComponent } from './inoutcomp.component';

describe('InoutcompComponent', () => {
  let component: InoutcompComponent;
  let fixture: ComponentFixture<InoutcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InoutcompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InoutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
