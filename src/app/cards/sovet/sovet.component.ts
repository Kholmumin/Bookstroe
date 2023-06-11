import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-sovet',
  templateUrl: './sovet.component.html',
  styleUrls: ['./sovet.component.scss'],
})
export class SovetComponent implements OnInit {
  cardInfoT!: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardInfoT = this.cardService.sovet;
  }
}
