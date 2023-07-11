import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { TarifRowComponent } from '../tarif-row/tarif-row.component';

import { TarifListComponent } from './tarif-list.component';

describe('TarifListComponent', () => {
  let component: TarifListComponent;
  let fixture: ComponentFixture<TarifListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifListComponent, ButtonComponent, TarifRowComponent ],
      //providers: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
