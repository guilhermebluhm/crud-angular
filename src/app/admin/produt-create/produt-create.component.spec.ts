import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutCreateComponent } from './produt-create.component';

describe('ProdutCreateComponent', () => {
  let component: ProdutCreateComponent;
  let fixture: ComponentFixture<ProdutCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
