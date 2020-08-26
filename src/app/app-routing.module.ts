import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { DevScreenComponent } from './dev-screen/dev-screen.component';

const routes: Routes = [
  { path: 'dev',   component: DevScreenComponent },
  { path: '',   component: HomeScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
