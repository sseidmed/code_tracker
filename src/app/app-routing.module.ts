import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoalsComponent } from './goals/goals.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'goals', component: GoalsComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

