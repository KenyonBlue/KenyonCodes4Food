import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule
  ],
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule {}