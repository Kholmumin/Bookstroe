import { Component, OnDestroy, OnInit } from '@angular/core';
import { Carousel } from './carousel';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  intervalSubs!: Subscription;
  images: Carousel[] = [
    { imageSrc: '../../assets/images/Group 56.png', imgAlt: 'Temuriylar' },
    {
      imageSrc:
        'https://plus.unsplash.com/premium_photo-1683309568218-bf32f6d904f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Temuriylar',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1685371863474-90594391bc95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Temuriylar',
    },
    {
      imageSrc:
        'https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
      imgAlt: 'Temuriylar',
    },
  ];
  controls = true;
  selectedIndex = 0;
  indicator = true;

  selectImage(index: number) {
    this.selectedIndex = index;
  }

  onPrevClick() {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  onNextClick() {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  ngOnInit(): void {
    this.intervalSubs = interval(10000).subscribe(() => {
      this.onNextClick();
    });
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }
}
