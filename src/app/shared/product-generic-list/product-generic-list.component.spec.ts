import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGenericListComponent } from './product-generic-list.component';

describe('ProductGenericListComponent', () => {
  let component: ProductGenericListComponent;
  let fixture: ComponentFixture<ProductGenericListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductGenericListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductGenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
