import { Component } from '@angular/core';
import { CardService } from '../card.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.scss'],
})
export class SingleAuthorComponent {
  mySubscription = new Subscription();

  constructor(private cardService: CardService) {
    this.mySubscription = this.cardService.mySubject.subscribe((data) => {
      console.log(data);
    });
  }
}
