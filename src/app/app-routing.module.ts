import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcGamesComponent } from './pc-games/pc-games.component';
import { MobileGamesComponent } from './mobile-games/mobile-games.component';

const routes: Routes = [
  { path: '',   redirectTo: '/pc', pathMatch: 'full' },
  {path:'pc', component: PcGamesComponent},
  {path:'mobile', component: MobileGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
