import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutEditComponent } from './produt-edit.component';

describe('ProdutEditComponent', () => {
  let component: ProdutEditComponent;
  let fixture: ComponentFixture<ProdutEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
