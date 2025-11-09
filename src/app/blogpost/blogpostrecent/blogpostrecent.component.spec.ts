import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostrecentComponent } from './blogpostrecent.component';

describe('BlogpostrecentComponent', () => {
  let component: BlogpostrecentComponent;
  let fixture: ComponentFixture<BlogpostrecentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogpostrecentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogpostrecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
