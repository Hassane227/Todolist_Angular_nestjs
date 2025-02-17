import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertacheComponent } from './ajoutertache.component';

describe('AjoutertacheComponent', () => {
  let component: AjoutertacheComponent;
  let fixture: ComponentFixture<AjoutertacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutertacheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutertacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
