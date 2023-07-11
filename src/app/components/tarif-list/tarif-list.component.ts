import { Component, OnInit } from '@angular/core';
import { Tarif } from 'src/app/models/tarif.model';
import { FakeApiService } from 'src/app/services/fake-api.service';

@Component({
  selector: 'app-tarif-list',
  templateUrl: './tarif-list.component.html',
  styleUrls: ['./tarif-list.component.scss'],
})

export class TarifListComponent implements OnInit {
  tarifList: Tarif[] = [];
  sortDirection: any = {
    downloadSpeed: 'asc',
    uploadSpeed: 'asc',
    price: 'asc',
  };

  constructor(
    private fakeApiServise: FakeApiService) {}

  ngOnInit(): void {
    this.fakeApiServise.getTarifs().subscribe((data) => {
      this.tarifList = data;
    });
  }

  sortList(key: string) {
    this.tarifList.sort((a: any, b: any) => {
      return this.sortDirection[key] === 'asc'
        ? a[key] - b[key]
        : b[key] - a[key];
    });
    this.sortDirection[key] === 'asc'
      ? (this.sortDirection[key] = 'desc')
      : (this.sortDirection[key] = 'asc');
  }
}
