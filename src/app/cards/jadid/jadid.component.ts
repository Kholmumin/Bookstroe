import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-jadid',
  templateUrl: './jadid.component.html',
  styleUrls: ['./jadid.component.scss'],
})
export class JadidComponent implements OnInit {
  cardInfoT!: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardInfoT = this.cardService.jadid;
  }

  onAuthor(name: string) {
    this.cardService.mySubject.next(name);
  }
}
