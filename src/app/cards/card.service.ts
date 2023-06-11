import { Injectable } from '@angular/core';
import { Card } from './card';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}
  mySubject = new BehaviorSubject<string>('');
  jadid: Card[] = [
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
  ];
  mustaqillik: Card[] = [
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
  ];

  sovet: Card[] = [
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://aniq.uz/photos/news/gAOmeOR5brD138Q.jpeg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Sowet',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
  ];
  temuriy: Card[] = [
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Temuriy Var zakon',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
    {
      cardImg: 'https://akademiklar.uz/uploads/images/otkir_hoshimov-1.jpg',
      cardName: 'Abdulla Avloniy',
      cardBirth: '1878-1934',
    },
  ];
}
