import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadComponent } from './lead.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LeadComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    TableModule,
    ButtonModule
  ]
})
export class LeadModule { }
