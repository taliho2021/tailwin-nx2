import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import {Lib3Module } from '@tailwin-nx2/lib3';

@NgModule({
  imports: [CommonModule, Lib3Module],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class Lib2Module {}
