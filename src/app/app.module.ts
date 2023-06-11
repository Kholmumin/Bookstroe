import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { CategoryHeaderComponent } from './cards/category-header/category-header.component';
import { JadidComponent } from './cards/jadid/jadid.component';
import { MustaqillikComponent } from './cards/mustaqillik/mustaqillik.component';
import { SearchComponent } from './cards/search/search.component';
import { SingleAuthorComponent } from './cards/single-author/single-author.component';
import { SingleCardComponent } from './cards/single-card/single-card.component';
import { SovetComponent } from './cards/sovet/sovet.component';
import { TemuriylarComponent } from './cards/temuriylar/temuriylar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    CardsComponent,
    SearchComponent,
    CategoryHeaderComponent,
    SingleCardComponent,
    TemuriylarComponent,
    JadidComponent,
    SovetComponent,
    MustaqillikComponent,
    SingleAuthorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
