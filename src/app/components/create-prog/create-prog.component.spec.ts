import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgComponent } from './create-prog.component';

describe('CreateProgComponent', () => {
  let component: CreateProgComponent;
  let fixture: ComponentFixture<CreateProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
