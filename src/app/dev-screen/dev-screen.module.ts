import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DevScreenComponent } from './dev-screen.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    DevScreenComponent
  ],
  exports: [
    DevScreenComponent
  ]
})
export class DevModule {}