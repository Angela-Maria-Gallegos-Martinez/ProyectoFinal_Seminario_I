import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ConsejosComponent } from './consejos/consejos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'consejos', component:ConsejosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
