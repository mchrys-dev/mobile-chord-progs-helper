import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprogsComponent } from './myprogs.component';

describe('MyprogsComponent', () => {
  let component: MyprogsComponent;
  let fixture: ComponentFixture<MyprogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyprogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
