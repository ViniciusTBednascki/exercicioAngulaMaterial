import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcGamesComponent } from './pc-games/pc-games.component';

const routes: Routes = [
  {path:'', component: PcGamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
