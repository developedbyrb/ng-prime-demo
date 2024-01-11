import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadComponent } from './lead.component';
import { UpsertLeadComponent } from './upsert-lead/upsert-lead.component';
import { DividerModule } from 'primeng/divider';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LeadComponent,
    UpsertLeadComponent
  ],
  imports: [
    CommonModule,
    LeadRoutingModule,
    DividerModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    DropdownModule,
    InputTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeadModule { }
