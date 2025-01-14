import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSwaggerComponent } from './test-swagger.component';

describe('TestSwaggerComponent', () => {
  let component: TestSwaggerComponent;
  let fixture: ComponentFixture<TestSwaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestSwaggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSwaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
