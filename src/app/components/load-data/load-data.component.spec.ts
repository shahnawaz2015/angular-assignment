import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataComponent } from './load-data.component';

describe('LoadMoreComponent', () => {
  let component: LoadDataComponent;
  let fixture: ComponentFixture<LoadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
