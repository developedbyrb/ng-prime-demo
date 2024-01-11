import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead.component';
import { UpsertLeadComponent } from './upsert-lead/upsert-lead.component';

const routes: Routes = [
  { path: '', component: LeadComponent },
  { path: 'create', component: UpsertLeadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
