import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdFormComponent } from './td-form.component';

describe('TdFormComponent', () => {
  let component: TdFormComponent;
  let fixture: ComponentFixture<TdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TdFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
