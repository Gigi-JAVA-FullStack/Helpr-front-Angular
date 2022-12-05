import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import { ComponentsModule } from '../../components/components.module';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    ChamadosComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class ChamadosModule { }
