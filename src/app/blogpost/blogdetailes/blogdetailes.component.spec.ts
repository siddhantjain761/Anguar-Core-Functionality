import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogdetailesComponent } from './blogdetailes.component';

describe('BlogdetailesComponent', () => {
  let component: BlogdetailesComponent;
  let fixture: ComponentFixture<BlogdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogdetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
