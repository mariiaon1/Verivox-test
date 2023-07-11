import { Component, Input } from '@angular/core';
import { Tarif } from 'src/app/models/tarif.model';

@Component({
  selector: 'app-tarif-row',
  templateUrl: './tarif-row.component.html',
  styleUrls: ['./tarif-row.component.scss']
})

export class TarifRowComponent {
  @Input() tarif: Tarif;
}
