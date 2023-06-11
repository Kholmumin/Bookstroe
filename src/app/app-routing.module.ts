import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { TemuriylarComponent } from './cards/temuriylar/temuriylar.component';
import { JadidComponent } from './cards/jadid/jadid.component';
import { MustaqillikComponent } from './cards/mustaqillik/mustaqillik.component';
import { SovetComponent } from './cards/sovet/sovet.component';

const routes: Routes = [
  {
    path: 'main',
    component: CarouselComponent,
    children: [
      { path: 'temuriylar', component: TemuriylarComponent },
      {
        path: 'jadid',
        component: JadidComponent,
      },
      { path: 'mustaqillik', component: MustaqillikComponent },
      { path: 'sovet', component: SovetComponent },
    ],
  },

  {
    path: '',
    redirectTo: 'main/temuriylar',
    pathMatch: 'full',
  },
  {
    path: 'main',
    redirectTo: 'main/temuriylar',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
