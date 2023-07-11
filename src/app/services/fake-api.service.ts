import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FAKE_LIST } from '../constants/list.constants';
import { Tarif } from '../models/tarif.model';

@Injectable({
  providedIn: 'root',
})

export class FakeApiService {
  getTarifs(): Observable<Tarif[]> {
    return of(FAKE_LIST);
  }
}
