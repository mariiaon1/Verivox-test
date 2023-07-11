import { Tarif } from '../models/tarif.model';

export const FAKE_LIST: Tarif[] = [
  {
    id: 1,
    name: 'Tarif Name1',
    benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
    price: 123,
    downloadSpeed: 10,
    uploadSpeed: 10,
    details: '',
  },
  {
    id: 2,
    name: 'Tarif Name2',
    benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
    price: 122,
    downloadSpeed: 12,
    uploadSpeed: 8,
    details: '',
  },
  {
    id: 3,
    name: 'Tarif Name3',
    benefits: ['Tarif Benefit1', 'Tarif Benefit2', 'Tarif Benefit3'],
    price: 124,
    downloadSpeed: 13,
    uploadSpeed: 6,
    details: '',
  },
];
