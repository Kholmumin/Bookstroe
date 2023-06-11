import { Component, OnInit } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-mustaqillik',
  templateUrl: './mustaqillik.component.html',
  styleUrls: ['./mustaqillik.component.scss'],
})
export class MustaqillikComponent implements OnInit {
  cardInfoT!: Card[];
  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardInfoT = this.cardService.mustaqillik;
  }
}
