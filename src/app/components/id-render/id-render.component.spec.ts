import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdRenderComponent } from './id-render.component';

describe('IdRenderComponent', () => {
  let component: IdRenderComponent;
  let fixture: ComponentFixture<IdRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
