import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-temuriylar',
  templateUrl: './temuriylar.component.html',
  styleUrls: ['./temuriylar.component.scss'],
})
export class TemuriylarComponent implements OnInit {
  cardInfoT!: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardInfoT = this.cardService.temuriy;
  }
}
