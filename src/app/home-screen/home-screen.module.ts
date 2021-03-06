import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeScreenComponent } from './home-screen.component';
import { AppRoutingModule } from '../app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuModule } from '../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MenuModule
  ],
  declarations: [
      HomeScreenComponent,
  ],
  exports: [
      HomeScreenComponent
  ]
})
export class HomeModule {}