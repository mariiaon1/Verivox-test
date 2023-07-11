import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from 'src/app/shared/button/button.component';

import { TarifRowComponent } from './tarif-row.component';

describe('TarifRowComponent', () => {
  let component: TarifRowComponent;
  let fixture: ComponentFixture<TarifRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifRowComponent, ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifRowComponent);
    component = fixture.componentInstance;
    component.tarif = {
      id: 1,
      name: 'Tarif Name1',
      benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
      price: 123,
      downloadSpeed: 10,
      uploadSpeed: 10,
      details: '',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
